import React from "react"
import SEO from "@seo"
import Layout from "@layout"
import Slit from "../images/slit.svg"
import { Link } from "gatsby"

//https://incidecoder.com/products/pixi-glow-tonic-discontinued-2

function Type({ pageContext }) {
    console.log(pageContext)

  return (
    <Layout>
        <SEO
    title={`${pageContext.Name} - most common ingredients`}
        description={`Learn what's in ${pageContext.Name}`}/>

        <div className="ingredient">
            <img src={Slit} alt="alt" />
        </div>

        <div className="layout">

        <h1 className="ingredient__title">Commonly used ingredients for {pageContext.Name}</h1>

        <h2>Commonly used ingredients</h2>
        <ul className="ingredient-list">
        {pageContext.Ingredients && pageContext.Ingredients.map((ingredient) => {
            return <li>
                    <Link to={`/ingredient/${string_to_slug(ingredient.data.Name)}`}>
                    <h3 className="product-group__title">{ingredient.data.Name}</h3>
                </Link>
            </li>;
        })}
        </ul>

        </div>

    </Layout>
  )
}


export default Type;

function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}
