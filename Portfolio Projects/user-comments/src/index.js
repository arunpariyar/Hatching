// import react and react-dom
import React from "react";
import ReactDOM from "react-dom";

//import CommentsDetails
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

//3rd part dev tool
import faker from "faker";

//create a App Component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h1>Hello</h1>
          <p> Do you agree our aggrements</p>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Hari"
          timeAgo="1:00 AM"
          commentText="Great Job My Friend!"
          authorAvatar={faker.image.people()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Krishna"
          timeAgo="2:00 PM"
          commentText="Fantastic!"
          authorAvatar={faker.image.animals()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Madhav"
          timeAgo="3:00 PM"
          commentText="Incredible!"
          authorAvatar={faker.image.cats()}
        />
      </ApprovalCard>
    </div>
  );
};

//render the app to the root using ReactDom
ReactDOM.render(<App />, document.getElementById("root"));
