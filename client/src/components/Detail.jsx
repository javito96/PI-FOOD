import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../actions/index";
import "./Detail.css";


export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const myRecipe = useSelector((state) => state.detail);
  console.log(myRecipe);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div key={id.toString}>
      {
      myRecipe.length > 0 ? (
        <div key={id.toString} className="global">
          <h1> {myRecipe[0].title}</h1>
          <img className="image" src={myRecipe[0]?.image} alt="img not found" />
          <h2>{myRecipe[0].summary}</h2>
          <div key={id.toString} dangerouslySetInnerHTML={{ __html: myRecipe[0]?.summary }} />
          <h2>Score : {myRecipe[0]?.healthScore} </h2>
         {/*  <h2>Spoonacular Score : {myRecipe[0]?.spoonacularScore}</h2> */}
          {myRecipe[0]?.dishTypes ? (
            <h2>Dish Types: {myRecipe[0]?.dishTypes.map((el) => el) + " "}</h2>
          ) : (
            ""
          )}
          <h2>
            Diets:
            {myRecipe[0]?.diets.map((el) =>
              el.title ? el.title + " " : el + " "
            )}{" "}
          </h2>
          <h2>Steps : </h2>
          {myRecipe[0].createdInDb === true
            ? myRecipe[0].steps
            : myRecipe[0].steps.map((el, index) => (
                <p>{`${index + 1}. ${el}`}</p>
              ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/home">
        <button>Return</button>
      </Link>
    </div>
  );
}