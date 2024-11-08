import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, doc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore'; 

const DiscussionForum = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    
    const commentsCollection = collection(db, 'comments');

    // Fetch comments from Firestore
    useEffect(() => {
        const fetchComments = async () => {
            const commentData = await getDocs(commentsCollection);
            setComments(commentData.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchComments();
    }, [commentsCollection]);

    // Add new comment to Firestore
    const handleAddComment = async (e) => {
        e.preventDefault();
        if (newComment.trim() !== '') {
            await addDoc(commentsCollection, {
                text: newComment,
                date: serverTimestamp(),
                replies: [],
            });
            setNewComment('');
            // Re-fetch comments after adding
            const commentData = await getDocs(commentsCollection);
            setComments(commentData.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }
    };

    // Add reply to a specific comment
    const handleAddReply = async (commentId, replyText) => {
        const commentRef = doc(db, 'comments', commentId);
    
        // Create a reply object with a client-side timestamp
        const reply = {
            text: replyText,
            date: Timestamp.fromDate(new Date()), // Set client-side timestamp here
        };
    
        try {
            // Use arrayUnion to add reply with client timestamp
            await updateDoc(commentRef, {
                replies: arrayUnion(reply)
            });
    
            // Re-fetch comments after adding reply to keep UI updated
            const commentData = await getDocs(commentsCollection);
            setComments(commentData.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error("Error adding reply: ", error);
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">Discussion Forum</h2>

            {/* Comment Input Form */}
            <form onSubmit={handleAddComment} className="mb-4">
                <textarea
                    className="w-full border rounded p-2 mb-2"
                    placeholder="Share your thoughts on the data..."
                    rows="3"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Post Comment
                </button>
            </form>

            {/* Display List of Comments */}
            <div className="space-y-4">
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        onAddReply={handleAddReply}
                    />
                ))}
                {comments.length === 0 && (
                    <p className="text-gray-500 text-center">No comments yet. Be the first to comment!</p>
                )}
            </div>
        </div>
    );
};

const Comment = ({ comment, onAddReply }) => {
    const [replyText, setReplyText] = useState('');
    const [showReplyForm, setShowReplyForm] = useState(false);

    const handleReplySubmit = (e) => {
        e.preventDefault();
        if (replyText.trim() !== '') {
            onAddReply(comment.id, replyText);
            setReplyText('');
            setShowReplyForm(false); // Hide the reply form after submitting
        }
    };

    return (
        <div className="p-3 border rounded bg-gray-50">
            <p className="text-gray-700">{comment.text}</p>
            <span className="text-sm text-gray-500">
                {comment.date ? new Date(comment.date.seconds * 1000).toLocaleString() : 'Loading...'}
            </span>
            <button
                onClick={() => setShowReplyForm(!showReplyForm)}
                className="text-blue-500 text-sm ml-4"
            >
                Reply
            </button>

            {/* Reply Form */}
            {showReplyForm && (
                <form onSubmit={handleReplySubmit} className="mt-2">
                    <textarea
                        className="w-full border rounded p-2 mb-2"
                        placeholder="Write a reply..."
                        rows="2"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                    >
                        Post Reply
                    </button>
                </form>
            )}

            {/* Display Replies */}
            <div className="ml-6 mt-3 space-y-3">
                {(comment.replies || []).map((reply, index) => (
                    <div key={index} className="p-2 border rounded bg-gray-100">
                        <p className="text-gray-700">{reply.text}</p>
                        <span className="text-sm text-gray-500">
                            {reply.date ? new Date(reply.date.seconds * 1000).toLocaleString() : 'Loading...'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscussionForum;
