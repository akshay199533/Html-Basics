import React from "react";
import "./Cards.css";
const Cards = () => {
  let cardArr = [
    {
      id: 1,
      imageUrl:
        "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
      title: "Introduction To A Machine Learning Online Course",
      authorName: "EdYoda",
      publishDate: "| 23 Aug 2019",
      description: `We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning
        online course holds. To begin with, one must understand what
        machine learning is. Basically, it is a concept wherein a
        machine attempts to understand the structure of a data and
        fits that into models that people can understand and utilize.
        While traditional forms of computing were all about solving
        problems using set instructions and data, machine learning is
        all about computers utilizing data, training on it and using
        statistical data to output values. Thus, in this way, the
        process of decision-making is automated for computers based on
        sample input data. Now that we know what Machine Learning is
        all about, its time to delve in a little deeper `,
    },
    {
      id: 2,
      imageUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
      title:
        "LAMP Stack Vs MEAN stack: Choosing the right platform for your web application development",
      authorName: "EdYoda",
      publishDate: "| 23 Aug 2019",
      description: `In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations around the world that intensely depend on programming for their everyday business operations, the big business level applications, sites and servers have become apparent. It is important to use consistent, scalable and standardized software when developing a new application. `,
    },
    {
      id: 3,
      imageUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
      title: "Challenges of Machine Learning in Big Data Analytics",
      authorName: "EdYoda",
      publishDate: "| 23 Aug 2019",
      description: `Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work, live and think by enabling the process of optimization, discovering insights and improved decision making. This potential relies on the ability to extract value from big data and provide data analytics. Machine learning is the ability to learn from data, provide insights, predictions, suggestions from data which help in the decision-making process. `,
    },
    {
      id: 4,
      imageUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
      title: "Breaking the Myths around Cybersecurity",
      authorName: "EdYoda",
      publishDate: "| 23 Aug 2019",
      description: ` As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The number of cyberattacks is ever-rising even after adopting every security measure possible by businesses. Cyber attackers are developing advancing technologies that are continuing to cause more damage. There are many methods through which a cyber attack is committed like software vulnerabilities, user interaction (using malicious links, email attachments) and use of stolen credentials logins, encryption keys. `,
    },
    {
      id: 5,
      imageUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
      title: "Importance of Data Backup and Recovery in the IT industry",
      authorName: "EdYoda",
      publishDate: "| 23 Aug 2019",
      description: `A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contingency plan that is necessary for every business and especially industries working with clouds, networks and computers should conduct a backup of its files which will serve as a boon in any point of time. `,
    },
    {
      id: 6,
      imageUrl:
        "https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png",
      title: "Practical Machine Learning with Python and Keras",
      authorName: "EdYoda",
      publishDate: "| 23 Aug 2019",
      description: `What is machine learning, and why do we care?
      Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively improve performance on a specific task) from data, without being explicitly programmed. Think of how efficiently (or not) Gmail detects spam emails, or how good text-to-speech has become with the rise of Siri, Alexa, and Google Home. `,
    },
  ];
  const card = cardArr.map((item) => {
    return (
        <div className="card" key={item.id}>
          <img src={item.imageUrl} alt="" />
          <div className="text-section">
            <h3>{item.title}</h3>
            <div className="author">
              <p className="author_name">
                {item.authorName}
                <span className="publish_date">{item.publishDate}</span>
              </p>
            </div>
            <div className="description">{item.description}</div>
          </div>
        </div>
    );
  });
  return (
    <div className="card_wrapper">
        {card}
    </div>
  );
};

export default Cards;
