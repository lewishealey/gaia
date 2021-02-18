import React from "react"
import ReactMarkdown from 'react-markdown'
import SEO from "@seo"
import Layout from "@layout"
import Slit from "../images/slit.svg"

//https://incidecoder.com/products/pixi-glow-tonic-discontinued-2

function Ingredient({ pageContext }) {

    console.log(pageContext)
    const metaTitle = `${pageContext.Name} | What is it`;
    const metaDesc = pageContext.What_is_it ? pageContext.What_is_it : "";
  return (
    <Layout>
        <SEO
            title={metaTitle}
            description={metaDesc}
        />

        <div className="ingredient">
            <img src={Slit} alt="alt" />
        </div>

        <div className="layout">

        <h1 className="ingredient__title">{pageContext.Name}</h1>
        <ul className="ingredient__summary">
            {pageContext.Scientific_description &&
                <li>
                    <h2 className="ingredient__summary__label">Scientific description</h2>
                    <p className="ingredient__summary__description">{pageContext.Scientific_description}</p>
                </li>
            }
            {pageContext.What_is_it &&
                <li>
                    <h2 className="ingredient__summary__label">What is it</h2>
                    <p className="ingredient__summary__description">{pageContext.What_is_it}</p>
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
                    <p className="ingredient__summary__description">{pageContext.What_does_it_do ? pageContext.What_does_it_do.map((what, i) => {
                        return <span key={`what_${i}`}>{what}{pageContext.What_does_it_do.length !== i+1 && ', '}</span>;
                    }): null}</p>
                </li>
            }
            {pageContext.Where_it_comes_from &&
                <li>
                    <h2 className="ingredient__summary__label">Where it comes from</h2>
                    <p className="ingredient__summary__description">{pageContext.Where_it_comes_from}</p>
                </li>
            }
            {pageContext.Product_Type &&
                <li>
                    <h2 className="ingredient__summary__label">Product type</h2>
                    <p className="ingredient__summary__description">{pageContext.Product_Type ? pageContext.Product_Type.map((type, i) => {
                        return <span key={`type_${i}`}>{type}{pageContext.Product_Type.length !== i+1 && ', '}</span>;
                    }): null}</p>
                </li>
            }
            {pageContext.Countries &&
                <li>
                    <h2 className="ingredient__summary__label">Countries of origin</h2>
                    <p className="ingredient__summary__description">{pageContext.Countries ? pageContext.Countries.map((country, i) => {
                        return <span key={`country_${i}`}>{country}{pageContext.Countries.length !== i+1 && ', '}</span>;
                    }): null}</p>
                </li>
            }
            {pageContext.Issues &&
                <li>
                    <h2 className="ingredient__summary__label">Potential issues</h2>
                    <p className="ingredient__summary__description">{pageContext.Issues ? pageContext.Issues.map((issue, i) => {
                        return <span key={`issue_${i}`}>{issue}{pageContext.Issues.length !== i+1 && ', '}</span>;
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
                        {pageContext.Questions.map((question, i) => {
                            return <li className="question" key={`question_${i}`}>
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
