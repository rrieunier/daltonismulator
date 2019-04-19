import React from "react";
import test from "../assets/images/test Ishihara.png";

export default class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <h1 className="title">Le daltonisme</h1>
        <p>
          Les daltoniens confondent certaines couleurs entre elles, souvent le
          rouge et le vert. Ils peuvent parfois ne pas distinguer les couleurs
          du tout.
        </p>
        <h3>Quelques chiffres</h3>
        <ul>
          <li>
              <pre>__ % de la population française souffre de daltonisme : __ % des
                  hommes… et seulement __ % des femmes.</pre>
          </li>
          <li>
            Héréditaire, cette anomalie de la vision est due à l’absence ou à
            l’altération des cellules nerveuses réceptrices de la rétine, les
            cônes, qui détectent les couleurs puis transmettent les informations
            au cerveau.
          </li>
          <li>Il y a __________ daltoniens en France.</li>
          <li>
            Au total, ___ millions en Europe Occidentale, aux Etats-Unis et au
            Japon.
          </li>
        </ul>
        <hr />
        <h2 className="title">Comment le détecter ?</h2>
        <p>
          Le daltonisme peut-être détecté par le biais du test d'Ishihara.
          L'objectif est de lire les chiffres écrits sur la figure suivante.
          Dans le cas ou la lecture est impossible, alors la personne est
          daltonienne.
        </p>
          {/*<img className="center-img" src={test} alt="test" />*/}
      </div>
    );
  }
}
