
import { firebaseApp } from './firebase';
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, orderBy, where, serverTimestamp, setDoc, writeBatch } from 'firebase/firestore';
import type { Post } from './blog-data';

// Note: This is a simplified service for demonstration.
// In a real application, you'd want more robust error handling,
// and you might handle data transformation more elegantly.

const db = getFirestore(firebaseApp);
const postsCollection = collection(db, 'posts');
const servicesCollection = collection(db, 'services');
const teamMembersCollection = collection(db, 'teamMembers');
const testimonialsCollection = collection(db, 'testimonials');


const isFirebaseConfigured = () => {
    const config = firebaseApp.options;
    return config && config.apiKey && config.apiKey !== "YOUR_API_KEY";
};

// If Firebase isn't configured, we'll use local static data for demonstration.
const getStaticPosts = async (): Promise<Post[]> => {
    const { posts } = await import('./blog-data');
    return posts.map((p, i) => ({...p, id: p.id || i.toString()}));
};

// ==================================================================
// POSTS
// ==================================================================
export const getPosts = async (): Promise<Post[]> => {
    if (!isFirebaseConfigured()) {
        return getStaticPosts();
    }
    
    try {
        const q = query(postsCollection, orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post));
    } catch (error) {
        console.error("Error fetching posts from Firestore:", error);
        return getStaticPosts();
    }
};

export const getPost = async (slug: string): Promise<Post | null> => {
     if (!isFirebaseConfigured()) {
        const posts = await getStaticPosts();
        return posts.find(p => p.slug === slug) || null;
    }
    
    try {
        const docRef = doc(db, "posts", slug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() } as Post;
        }
        
        return null;

    } catch (error) {
        console.error(`Error fetching post with slug ${slug}:`, error);
        return null;
    }
};

export const addPost = async (post: Omit<Post, 'id'>) => {
     if (!isFirebaseConfigured()) {
        throw new Error("Firebase is not configured. Cannot add post.");
    }

    const existingPost = await getPost(post.slug);
    if (existingPost) {
        throw new Error(`A post with slug "${post.slug}" already exists.`);
    }
    
    const docRef = doc(postsCollection, post.slug);
    await setDoc(docRef, post);
    return docRef.id;
};

export const updatePost = async (slug: string, postData: Partial<Post>) => {
     if (!isFirebaseConfigured()) {
        throw new Error("Firebase is not configured. Cannot update post.");
    }
    const docRef = doc(db, "posts", slug);
    await updateDoc(docRef, postData);
};


export const deletePost = async (slug: string) => {
     if (!isFirebaseConfigured()) {
        throw new Error("Firebase is not configured. Cannot delete post.");
    }
    const docRef = doc(db, "posts", slug);
    await deleteDoc(docRef);
};


// ==================================================================
// GENERIC GETTER FOR OTHER COLLECTIONS
// ==================================================================

export const getCollectionData = async (collectionName: 'services' | 'teamMembers' | 'testimonials') => {
    if (!isFirebaseConfigured()) {
        // Mock data for unconfigured firebase
        return {
            services: [],
            teamMembers: [],
            testimonials: [],
        }[collectionName];
    }
    try {
        const q = query(collection(db, collectionName));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(`Error fetching ${collectionName} from Firestore:`, error);
        return [];
    }
};

export const getDocument = async (collectionName: string, id: string) => {
    if (!isFirebaseConfigured()) return null;
    try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
    } catch (error) {
        console.error(`Error fetching document ${id} from ${collectionName}:`, error);
        return null;
    }
};

export const addDocument = async (collectionName: string, data: any) => {
    if (!isFirebaseConfigured()) throw new Error("Firebase is not configured.");
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
};

export const updateDocument = async (collectionName: string, id: string, data: any) => {
    if (!isFirebaseConfigured()) throw new Error("Firebase is not configured.");
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data);
};

export const deleteDocument = async (collectionName: string, id: string) => {
    if (!isFirebaseConfigured()) throw new Error("Firebase is not configured.");
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
};
