import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";

import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const Libreria = () => {
  am4core.useTheme(am4themes_kelly);
  am4core.useTheme(am4themes_animated);
  // Themes end

  let chart = am4core.create(
    "chartdiv",
    am4plugins_forceDirected.ForceDirectedTree
  );
  let networkSeries = chart.series.push(
    new am4plugins_forceDirected.ForceDirectedSeries()
  );

  chart.data = [
    {
      name: "YeapContact",
      children: [
        {
          name: "Omnicanalidad",
          children: [
            {
              name: "Campañas \n Outbound",
              children: [
                {
                  name: "Campañas \n marcación",
                  children: [
                    { name: "Preview", value: 400 },
                    { name: "Progresivo", value: 400 },
                    { name: "Predictivo", value: 400 },
                    { name: "Call back", value: 400 },
                  ],
                },
                {
                  name: "Campañas \n masivo",
                  children: [
                    {
                      name: "Virtuales",
                      children: [
                        { name: "Notificación", value: 400 },
                        { name: "Transaccionales", value: 400 },
                      ],
                    },
                    { name: "Mail \n masivo", value: 400 },
                    { name: "SMS \n masivo", value: 400 },
                  ],
                },
              ],
            },
            {
              name: "Campañas \n Inbound",
              children: [
                { name: "Menús \n IVR", value: 400 },
                {
                  name: "IVR \n Transaccional",
                  children: [
                    { name: "DTMF", value: 400 },
                    {
                      name: "Integraciones",
                      children: [
                        { name: "Web Service \n Cliente", value: 400 },
                        { name: "Bases \n de datos \n Cliente", value: 400 },
                        { name: "Sistema \n de Texto \n a Voz", value: 400 },
                        { name: "Sistema \n de Voz \n a Texto", value: 400 },
                      ],
                    },
                    { name: "Pop Up \n agente", value: 400 },
                  ],
                },
                { name: "EWT", value: 400 },
              ],
            },
            {
              name: "Redes \n sociales",
              children: [
                {
                  name: "Multiagente",
                  children: [
                    { name: "WhatsApp", value: 400 },
                    { name: "FB Messenger", value: 400 },
                    { name: "Instragram", value: 400 },
                    { name: "Twitter", value: 400 },
                    { name: "Telegram", value: 400 },
                  ],
                },
                { name: "Facebook \n Leads", value: 400 },
              ],
            },
            {
              name: "Web",
              children: [
                { name: "Click \n to \n Chat", value: 400 },
                { name: "Click \n to \n Call", value: 400 },
                { name: "Click \n to \n Video", value: 400 },
              ],
            },
          ],
        },
        {
          name: "Funcionalidades \n avanzadas",
          children: [
            {
              name: "CRM",
              children: [
                {
                  name: "Nativo",
                  value: 400,
                },
                {
                  name: "Personalizado \n básico",
                  value: 400,
                },
                {
                  name: "Personalizado \n avanzado",
                  value: 400,
                },
              ],
            },
            {
              name: "Bots",
              children: [
                {
                  name: "Captación de \n intenciones",
                  value: 400,
                },
                {
                  name: "Lenguaje \n natural",
                  value: 400,
                },
                {
                  name: "I.A.",
                  value: 400,
                },
              ],
            },
            {
              name: "Calidad",
              children: [
                {
                  name: "Grabaciones",
                  value: 400,
                },
                {
                  name: "Monitoreo \n asesores",
                  value: 400,
                },
                {
                  name: "Encuestas",
                  children: [
                    {
                      name: "Tipo IVR",
                      children: [
                        {
                          name: "Básica",
                          value: 400,
                        },
                        {
                          name: "Avanzada",
                          value: 400,
                        },
                      ],
                    },
                    { name: "SMS/Web", value: 400 },
                    { name: "E-mail", value: 400 },
                    { name: "WhatsApp", value: 400 },
                  ],
                },
              ],
            },
            {
              name: "Herramientas",
              children: [
                {
                  name: "Reportes",
                  children: [
                    { name: "Nativos", value: 400 },
                    { name: "Personalizados \n básicos", value: 400 },
                    { name: "Personalizados \n avanzados", value: 400 },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Servicios",
          children: [
            {
              name: "Integraciones",
              value: 200,
            },
            {
              name: "Soporte",
              children: [
                {
                  name: "Implementación y \n soporte",
                  value: 400,
                },
                {
                  name: "Capacitación",
                  value: 400,
                },
                {
                  name: "Acompañamiento y \n estabilización",
                  value: 400,
                },
                {
                  name: "Administración \n contact \n center",
                  value: 400,
                },
                {
                  name: "Soporte \n equipos \n cliente",
                  value: 400,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  networkSeries.dataFields.value = "value";
  networkSeries.dataFields.name = "name";
  networkSeries.dataFields.children = "children";
  networkSeries.nodes.template.tooltipText = "{name}";
  networkSeries.nodes.template.fillOpacity = 1;

  networkSeries.nodes.template.label.text = "{name}";
  networkSeries.fontSize = 14;
  // Anillos mostrados por defecto
  networkSeries.maxLevels = 3;
  //Distancia entre nodos
  networkSeries.manyBodyStrength = -40;
  //Tamaño de los nodos
  networkSeries.maxRadius = am4core.percent(11);
  //Grosor del Lazo
  networkSeries.links.template.strokeWidth = 5;

  let hoverState = networkSeries.links.template.states.create("hover");
  hoverState.properties.strokeWidth = 1;
  hoverState.properties.strokeOpacity = 1;

  networkSeries.nodes.template.events.on("over", function (event) {
    event.target.dataItem.childLinks.each(function (link) {
      link.isHover = false;
    });
    if (event.target.dataItem.parentLink) {
      event.target.dataItem.parentLink.isHover = false;
    }
  });

  networkSeries.nodes.template.events.on("out", function (event) {
    event.target.dataItem.childLinks.each(function (link) {
      link.isHover = false;
    });
    if (event.target.dataItem.parentLink) {
      event.target.dataItem.parentLink.isHover = false;
    }
  });
  return <div id="chartdiv" style={{ width: "100%", height: "100vh" }}></div>;
};

export default Libreria;
