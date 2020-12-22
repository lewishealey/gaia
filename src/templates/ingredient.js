import React from "react"
import ReactMarkdown from 'react-markdown'
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
            <img src={Slit} alt="alt" />
        </div>

        <div className="layout">

        <h1 className="ingredient__title">{pageContext.Name}</h1>
        <ul className="ingredient__summary">
            {pageContext.Scientific_description &&
                <li>
                    <h2 className="ingredient__summary__label">Scientific description</h2>
                    <p>{pageContext.Scientific_description}</p>
                </li>
            }
            {pageContext.Detailed_description &&
                <li>
                    <h2 className="ingredient__summary__label">Detailed description</h2>
                    <ReactMarkdown>{pageContext.Detailed_description}</ReactMarkdown>
                </li>
            }
            {pageContext.What_does_it_do &&
                <li>
                    <h2 className="ingredient__summary__label">What does it do</h2>
                    <p>{pageContext.What_does_it_do ? pageContext.What_does_it_do.map((what) => {
                        return <span>{what}, </span>;
                    }): null}</p>
                </li>
            }
            {pageContext.Where_it_comes_from &&
                <li>
                    <h2 className="ingredient__summary__label">Where it comes from</h2>
                    <p>{pageContext.Where_it_comes_from}</p>
                </li>
            }
            {pageContext.Product_Type &&
                <li>
                    <h2 className="ingredient__summary__label">Product type</h2>
                    <p>{pageContext.Product_Type ? pageContext.Product_Type.map((type) => {
                        return <span>{type} </span>;
                    }): null}</p>
                </li>
            }
            {pageContext.Countries &&
                <li>
                    <h2 className="ingredient__summary__label">Countries of origin</h2>
                    <p>{pageContext.Countries ? pageContext.Countries.map((country) => {
                        return <span>{country}, </span>;
                    }): null}</p>
                </li>
            }
            {pageContext.Issues &&
                <li>
                    <h2 className="ingredient__summary__label">Potential issues</h2>
                    <p>{pageContext.Issues ? pageContext.Issues.map((issue) => {
                        return <span>{issue}, </span>;
                    }): 'None!'}</p>
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
