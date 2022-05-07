import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2>1.Question:Difference between javascript and nodejs?</h2>{" "}
      <p>
        Ans:1.JavaScript is a simple programming language that runs in any
        browser JavaScript Engine. 2.Whereas Node JS is an interpreter or
        running environment for a JavaScript programming language that holds
        many excesses, 3. it can run any browser with a default browser running
        environment. 4.It is actually a kind of environment or interpreter that
        can represent JavaScript or run any javascript program. 5. JQuery is one
        of the popular libraries to make comfortable use of JavaScript by
        avoiding to write a lot of code. 6.It actually helps us use JavaScript
        from outside of the browser, like creating, writing or executing one
        shell script, some back-end services, or running on hardware.
      </p>
      <h2>
        2.Question:When should you use nodejs and when should you use mongodb?
      </h2>
      <p>
        ans: 1.Nodejs is a Javascript engine that you can write any application
        you want with (by programming in the Javascript language). It runs your
        Javascript code. 2.MongoDB is a database engine. Code within some
        application or server uses MongoDB to save, query or update data in a
        database. 3. It runs your Javascript code. Most commonly, it is used to
        build servers that can respond to web requests, 4. There are many web
        servers built with nodejs that will then use MongoDB for storing data.
        5.MongoDB offers an API library that runs within a Nodejs application to
        give you programmatic access to MongoDB so you can create databases and
        then add, query, update or delete data from the MongoDB database.
        MongoDB also has API libraries for other programming environments such
        as Python, Java, etc
      </p>
      <h2>3.Question: Differences between sql and nosql databases?</h2>
      <p>
        ans: 1. SQL databases are relational, NoSQL databases are
        non-relational. 2.SQL databases use structured query language and have a
        predefined schema. NoSQL databases have dynamic schemas for unstructured
        data. 3.SQL databases are vertically scalable, while NoSQL databases are
        horizontally scalable. 4.SQL databases are table-based, while NoSQL
        databases are document, key-value, graph, or wide-column stores. 5.SQL
        databases are better for multi-row transactions, while NoSQL is better
        for unstructured data like documents or JSON.
      </p>
    </div>
  );
};

export default Blogs;
