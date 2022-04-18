import React from 'react';
import './MainBlogs.css'
const MainBlogs = () => {
    return (
        <div>
            <h1 className='mt-4 text-primary'>Question and Answer</h1>
            <div>
                <div className='question-head'>
                   <div>
                   <div className='question-part'>
                        <h4 className='question'> <b>Question:</b> Difference between authorization and authentication</h4>
                        <p className='answer'><b>Authorization:</b> Authorization বাংলা অর্থ হলো অনুমোদন । কোনো স্থানে বা কোনো ওয়েবসাইটে প্রবেশ করার জন্য যে কার্যক্রম সম্পন্ন করতে হয় তাই হলো Authorization । একটি ওয়েবসাইটে যখন তখন কেউ যাতে প্রবেশ করতে না পারে এজন্য Authorization ব্যবহার করা হয়। এতে ওয়েবসাইট নিরাপত্তা বৃদ্ধি পায় </p>
                        <p className='answer'> <b>Authentication : </b> Authentication অর্থ হলো প্রমানীকরণ। কোনো ওয়েবসাইটে কেউ প্রবেশ করলে কে প্রবেশ করছে তারা আইডিয়েন্টি জানার পদ্ধতি হলো Authentication । ওয়েবসাইটের মালিক যখন আপনি ওয়েবসাইটে প্রবেশ  করবেন তখন আপনার ইমেইল, গুগল ইত্যাদি ব্যবস্থা রেখেছে। সেগুলোর মাধ্যমে আপনি ওয়েবসাইটে প্রবেশ করতে পারবেন </p>
                    </div>
                    <div className='question-part'>
                        <h4 className='question'> <b>Question:</b> What other services does firebase provide other than authentication
                        </h4>
                        <p className='answer'><b>Answer : </b>
                        হ্যা করে, firebase এছাড়াও হোস্টিং করে , আপ্যস তৈরির কাজে ব্যবহার করা হয় । বিভিন্ন ডাটা সংরক্ষন করা যায়।  এছাড়াও ক্লাউড ফাংশন ইত্যাদি কাজে ব্যবহার করা হয়।
                        </p>
                       
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default MainBlogs;