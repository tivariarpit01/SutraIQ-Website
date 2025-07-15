
import { firebaseApp } from './firebase';
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, orderBy, where, serverTimestamp, setDoc } from 'firebase/firestore';
import type { Post } from './blog-data';

// Note: This is a simplified service for demonstration.
// In a real application, you'd want more robust error handling,
// and you might handle data transformation more elegantly.

const db = getFirestore(firebaseApp);
const postsCollection = collection(db, 'posts');

const isFirebaseConfigured = () => {
    return process.env.NEXT_PUBLIC_FIREBASE_API_KEY && process.env.NEXT_PUBLIC_FIREBASE_API_KEY !== "YOUR_API_KEY";
};

// If Firebase isn't configured, we'll use local static data for demonstration.
const getStaticPosts = async (): Promise<Post[]> => {
    const { posts } = await import('./blog-data');
    return posts;
};

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
        // Fallback to static data if Firestore fails
        return getStaticPosts();
    }
};

export const getPost = async (slug: string): Promise<Post | null> => {
     if (!isFirebaseConfigured()) {
        const posts = await getStaticPosts();
        return posts.find(p => p.slug === slug) || null;
    }
    
    try {
        const q = query(postsCollection, where('slug', '==', slug));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return null;
        }
        const docSnap = querySnapshot.docs[0];
        return { id: docSnap.id, ...docSnap.data() } as Post;
    } catch (error) {
        console.error(`Error fetching post with slug ${slug}:`, error);
        return null;
    }
};

export const addPost = async (post: Omit<Post, 'id'>) => {
     if (!isFirebaseConfigured()) {
        throw new Error("Firebase is not configured. Cannot add post.");
    }

    // Check if post with the same slug already exists
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
