import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';
import authService from '../appwrite/auth';
import '../index.css'; // Ensure to import the CSS file where spinner styles are defined

function MyPosts() {
    const [posts, setMyPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        authService.getCurrentUser().then((id) => {
            if (id) {
                setUserId(id);
            } else {
                setLoading(false); // Stop loading if userId can't be retrieved
            }
        }).catch(() => {
            setLoading(false); // Stop loading in case of error
        });
    }, []);

    useEffect(() => {
        if (userId) {
            appwriteService.getMyPosts(userId).then((posts) => {
                if (posts && posts.documents.length > 0) {
                    setMyPosts(posts.documents);
                } else {
                    setMyPosts([]); // No posts found
                }
                setLoading(false);
            }).catch(() => {
                setLoading(false);
            });
        }
    }, [userId]);

    return (
        <div className="w-full py-8 bg-slate-900">
            <div>
                <h1 className="text-[2rem] md:text-[2.5rem] text-center font-semibold">
                    My Posts
                </h1>
            </div>
            <div className="h-full">
                <Container>
                    {loading ? ( // Check loading state
                        <div className="flex justify-center items-center h-full">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        posts.length > 0 ? (
                            <div className="flex flex-wrap flex-row">
                                {posts.map((post) => (
                                    <div key={post.$id} className="p-3 w-full md:w-1/2 lg:w-1/3">
                                        <PostCard {...post} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center">Nothing to Show</div>
                        )
                    )}
                </Container>
            </div>
        </div>
    );
}

export default MyPosts;
