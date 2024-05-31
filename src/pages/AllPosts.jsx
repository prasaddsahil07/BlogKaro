import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';
import '../index.css'; // Ensure to import the CSS file where spinner styles are defined

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
            setLoading(false); // Set loading to false after fetching
        }).catch(() => {
            setLoading(false); // Set loading to false in case of an error
        });
    }, []);

    return (
        <div className="w-full py-8 bg-slate-900">

            <div>
                <h1 className="text-[2rem] md:text-[2.5rem] text-center font-semibold">
                    All Posts
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

export default AllPosts;
