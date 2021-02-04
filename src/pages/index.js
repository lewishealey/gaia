import React, {useState} from "react"
import { Link, graphql } from "gatsby"

import Layout from "@layout"
import SEO from "@seo"

const Index = ({data}) => {
    const [search, setSearch] = useState(null);

    console.log(data)

  return <Layout
            title="Ingredients info you can understand"
            subtitle="Learn more about the ingredients in the products you use with our simple and jargon-free explanations.">
        <SEO
        title="Gaia | Simple and jargon-free ingredients directory"
            description="Learn more about the ingredients in the products you use with our simple and jargon-free explanations."/>

    <div className="layout" style={{marginTop: "2rem"}}>
    <div className="ingredient-list__search">
        <label for="search">Search all {data.ingredients.edges.length} ingredients & products</label>
        <input className="input" id="search" placeholder={`E.g Limonene`}
        onKeyDown={(e) => {
            setSearch(e.target.value)
        }}
        onChange={(e) => {
            setSearch(e.target.value)
        }} value={search}/>
    </div>

    <div className="ingredient-list__searching">
        {search && <div>Searching for '{search}'</div>}
    </div>

    <section>

        <ul className="ingredient-list">
        {data.ingredients?.edges.map((ingredient, i) => {
            const type = ingredient.data.queryName === "IngredientData" ? "ingredient" : "product";
            const slug = string_to_slug(ingredient.node.data.Name);

        if(search && ingredient.node.data.Name.toLowerCase().includes(search.toLowerCase())) {
            return <li key={i}>
                    <Link to={`/${type}/${slug}`}>
                    <h3 className="product-group__title">{ingredient.node.data.Name}</h3>
                </Link>
            </li>;
        }
        if(!search) {
            return <li key={i}>
                <Link to={`/${type}/${slug}`}>
                    <h3 className="product-group__title">{ingredient.node.data.Name}</h3>
                    </Link>
                </li>;
        }


        })}

    </ul>
    </section>
    </div>
  </Layout>
}



export default Index;

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


export const query = graphql`
  query IngredientsQuery {
    ingredients: allAirtable(filter: {queryName: {in: ["IngredientData", "TypeData"]}}, sort: {fields: data___Name, order: ASC}) {
        edges {
          node {
            id
            data {
              Name
              Slug
              Background
            }
            queryName
          }
        }
      }
 }
`

