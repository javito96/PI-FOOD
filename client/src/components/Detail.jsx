import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../actions/index";
import "./Detail.css";
import Loading from './Loading.jsx'


export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const myRecipe = useSelector((state) => state.detail);
  console.log(myRecipe);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div className="detail" key={id.toString}>
      {
      myRecipe.length > 0 ? (
        <div key={id.toString}>

         <div>
          <h1 className="title"> {myRecipe[0].title}</h1>
         </div>


         <div className="summary">
          <img className="image" src={myRecipe[0]?.image} alt="img not found" />
          <div key={id.toString} dangerouslySetInnerHTML={{ __html: myRecipe[0]?.summary }} />
          <h2>Score : {myRecipe[0]?.healthScore} </h2>         
         </div>


         <div className="divContainer">         
         {/*  <h2>Spoonacular Score : {myRecipe[0]?.spoonacularScore}</h2> */}
          {myRecipe[0]?.dishTypes ? (
            <h2>Dish Types: {myRecipe[0]?.dishTypes.map((el) => el) + " "}</h2>
            ) : (
              ""
              )}
          <h2 className="summary">
            Diets:
            {myRecipe[0]?.diets.map((el) =>
              el.title ? el.title + " " : el + " "
              )}{" "}
          </h2>
          </div>


          <div className="steps">
          <h4>Steps : </h4>
          {myRecipe[0].createdInDb === true
            ? myRecipe[0].steps
            : myRecipe[0].steps.map((el, index) => (
                <h4>{`${index + 1}. ${el}`}</h4>
              ))}
              </div>
        </div>
      ) : (
        <Loading/>
        // <h1>loading ...</h1>
      )}
        <button>
      <Link className="button" id='button' to="/home">
          Return
      </Link>
          </button>
    </div>
  );
}