import React, { useState } from 'react';
import Navbar from '../components/shared/Navbar';
import whatisreact from '/src/assets/Blogs/Why-Use-React.jpg';
import nodejs from '/src/assets/Blogs/nodejs.jpg';
import expressjs from '/src/assets/Blogs/expressjs.jpg';

function BlogsHome() {
  // Initialize an array to handle the readMore state for each blog
  const [isReadMore, setIsReadMore] = useState([false, false, false]);

  // Function to toggle readMore for a specific blog index
  const toggleReadMore = (index) => {
    const updatedReadMore = [...isReadMore];
    updatedReadMore[index] = !updatedReadMore[index];
    setIsReadMore(updatedReadMore);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='grid grid-cols-3 items-center text-center gap-4'>
        {/* Blog 1: What is React.js? */}
        <div className='shadow-lg font-bold rounded-xl mt-5 ml-5 text-left'>
          <img src={whatisreact} alt="What is React.js?" width="100%" className='px-4 rounded-lg hover:bg-slate-400' />
          <h2>What is React.js?</h2>
          <p className='font-normal'>
            {isReadMore[0] ? (
              <>
                React.js is a JavaScript library for building user interfaces, particularly for single-page applications (SPAs) where the UI is dynamic and interacts with the user in real time...
              </>
            ) : (
              <>
                React.js is a JavaScript library for building user interfaces, particularly for single-page applications (SPAs) where the UI is dynamic and interacts with the user in real time...
              </>
            )}
          </p>
          <button onClick={() => toggleReadMore(0)}>
            {isReadMore[0] ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Blog 2: What is Node.js? */}
        <div className='shadow-lg font-bold rounded-xl mt-5 mx-1 items-center text-left'>
          <img src={nodejs} alt="What is Node.js?" width="70%" className='rounded-lg px-4 hover:bg-slate-400' />
          <h2>What is Node.js?</h2>
          <p className='font-normal'>
            {isReadMore[1] ? (
              <>
                Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code on the server side...
              </>
            ) : (
              <>
                Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code on the server side...
              </>
            )}
          </p>
          <button onClick={() => toggleReadMore(1)}>
            {isReadMore[1] ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Blog 3: What is Express.js? */}
        <div className='shadow-lg font-bold rounded-xl mt-5 mx-1 items-center text-left'>
          <img src={expressjs} alt="What is Express.js?" width="100%" className='rounded-lg px-1 hover:bg-slate-400' />
          <h2>What is Express.js?</h2>
          <p className='font-normal'>
            {isReadMore[2] ? (
              <>
                Express.js is a web application framework for Node.js, designed for building web applications and APIs. It's lightweight, flexible, and provides a robust set of features to develop web and mobile applications It simplifies the process of building a server by providing a layer of basic web application functionalities on top of Node.js. Express is one of the most popular frameworks for Node.js, known for making API and web development faster and more efficient by handling complex tasks like routing, middleware, and HTTP requests easily.

In simpler terms, Express.js is to Node.js what a library is to a programming language — it provides additional utilities and abstractions to make development smoother.

Key Features of Express.js:
Routing: Defines how your application responds to client requests for specific URLs.
Middleware: Functions that execute during the request-response lifecycle.
Template Engines: Render dynamic content on web pages (e.g., Pug, EJS).
Error Handling: Provides built-in error-handling mechanisms.
RESTful API Support: Makes it easy to build RESTful services or APIs.
Highly Configurable: Gives developers full control to customize their applications.
How to Install Express.js
1. Install Node.js and npm:
Make sure Node.js is installed. You can check by running:
bash
Copy code
node -v
npm -v
2. Create a New Directory for Your Project:
bash
Copy code
mkdir my-express-app
cd my-express-app
3. Initialize the Project:
Initialize your project with npm, which will generate a package.json file:

bash
Copy code
npm init -y
4. Install Express.js:
Use npm to install Express:

bash
Copy code
npm install express --save
5. Create Your First Express.js Application:
Create a file named app.js and write the following code:

javascript
// app.js
const express = require('express');
const app = express();
const port = 3000;

{/* app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
6. Run the Application:
Start your Express server by running: */}

bash
Copy code
node app.js
Visit http://localhost:3000 in your browser, and you should see "Hello World from Express!"

Pros and Cons of Using Express.js
Pros:
Simplifies Node.js:

Express simplifies server-side development by providing built-in support for handling requests, routing, and middleware. It abstracts the complexities of vanilla Node.js, allowing developers to focus on building the application.
Fast Development:

Its minimalist design makes it quick to start, making Express.js ideal for rapid development of RESTful APIs, web applications, and microservices.
Flexible:

Express is unopinionated, which means developers are free to structure their applications however they prefer. This flexibility allows them to choose tools, middleware, and additional technologies that best suit their needs.
Middleware:

Middleware functions in Express.js allow for better control over the application’s request-response cycle. You can use Express’s built-in middleware (like serving static files) or third-party middleware (like body parsing, authentication, etc.).
Vast Ecosystem:

Express benefits from the entire Node.js ecosystem, which includes thousands of middleware and libraries available via npm. This enhances productivity and enables developers to build features like authentication, validation, and more easily.
Scalability:

As a lightweight framework, Express can be scaled to handle large applications, especially when following microservices architecture.
Active Community Support:

Express is widely used and has a large, active developer community, making it easy to find resources, tutorials, and libraries.
Cons:
Not Opinionated:

While flexibility is a pro, it can also be a con. Express doesn’t enforce a particular project structure, leaving it up to the developer. This can be challenging for beginners who might prefer more guidance in organizing their projects.
Requires Manual Setup:

Unlike full-fledged frameworks (like Ruby on Rails or Django), Express requires developers to configure things like routing, database integration, and error handling. This can increase the setup time for complex applications.
Middleware Complexity:

As applications grow, managing middleware can become complex and hard to debug. Improperly arranged or misused middleware can introduce bugs or slow down the application.
Callback Hell:

Like Node.js, Express heavily relies on callbacks for asynchronous operations. This can lead to deeply nested callbacks (also known as "callback hell") in larger applications. Using Promises or async/await can mitigate this issue, but requires additional knowledge and care.
Not Ideal for Monolithic Apps:

Express is great for small to medium-sized applications and APIs. However, for large, monolithic apps, it may require more configuration compared to frameworks that provide more out-of-the-box solutions.
Learning Curve:

Although Express is minimal, it still requires developers to have a solid understanding of JavaScript, asynchronous programming, and the Node.js runtime. For beginners, this might pose a learning curve.
              </>
            ) : (
              <>
                Express.js is a web application framework for Node.js, designed for building web applications and APIs...
              </>
            )}
          </p>
          <button onClick={() => toggleReadMore(2)}>
            {isReadMore[2] ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogsHome;
