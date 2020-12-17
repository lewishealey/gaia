import React from "react"
import SEO from "@seo"
import Layout from "@layout"
import Slit from "../images/slit.svg"

//https://incidecoder.com/products/pixi-glow-tonic-discontinued-2

function Ingredient({ pageContext }) {
  return (
    <Layout>
        <SEO
    title={`${pageContext.Name}`}
        description={`${pageContext.What_is_it} from ${pageContext.Where_it_comes_from}`}/>
        <div className="ingredient">
            <div className="layout">
                <h1 className="ingredient__title">{pageContext.Name}</h1>
            </div>
            <img src={Slit} alt="alt" />
        </div>

        <div className="layout">
        <ul className="ingredient__summary">
            {pageContext.Scientific_description &&
                <li>
                    <span className="ingredient__summary__label">Scientific description</span>
                    {pageContext.Scientific_description}
                </li>
            }
            {pageContext.What_does_it_do &&
                <li>
                    <span className="ingredient__summary__label">What does it do</span>
                    {pageContext.What_does_it_do ? pageContext.What_does_it_do.map((what) => {
                        return <span>{what} </span>;
                    }): null}
                </li>
            }
            {pageContext.Where_it_comes_from &&
                <li>
                    <span className="ingredient__summary__label">Where it comes from</span>
                    {pageContext.Where_it_comes_from}
                </li>
            }
            {pageContext.Product_Type &&
                <li>
                    <span className="ingredient__summary__label">Product type</span>
                    {pageContext.Product_Type ? pageContext.Product_Type.map((type) => {
                        return <span>{type} </span>;
                    }): null}
                </li>
            }
            {pageContext.Countries &&
                <li>
                    <span className="ingredient__summary__label">Countries of origin</span>
                    {pageContext.Countries ? pageContext.Countries.map((country) => {
                        return <span>{country}, </span>;
                    }): null}
                </li>
            }
            {pageContext.Issues &&
                <li>
                    <span className="ingredient__summary__label">Potential issues</span>
                    {pageContext.Issues ? pageContext.Issues.map((issue) => {
                        return <span>{issue}, </span>;
                    }): 'None!'}
                </li>
            }
        </ul>
        </div>
        {/* <p><Link to="/ingredients">Back to ingredients</Link></p> */}

        {pageContext.Questions &&
            <section className="product__section">
                    <h3 className="ingredient__section__title">Common questions</h3>
                    <ul className="question__list">
                        {pageContext.Questions.map((question) => {
                            return <li className="question">
                                <h4 className="question__title">{question.data.Title}</h4>
                                <p className="question__answer">{question.data.Answer}</p>
                            </li>;
                        })}
                    </ul>
            </section>
        }

    </Layout>
  )
}


export default Ingredient;
