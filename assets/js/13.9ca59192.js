(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{363:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"shared-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared-library"}},[t._v("#")]),t._v(" Shared Library")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://github.com/NIT-Administrative-Systems/AS-jenkins-shared",target:"_blank",rel:"noopener noreferrer"}},[t._v("AS-jenkins-shared"),a("OutboundLink")],1),t._v(" repository contains common code that can be used in any pipeline.")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("This repository is intended to be used by declarative pipelines.")]),t._v(" "),a("p",[t._v("You will need to declare that you are using the library at the top of your pipeline. Jenkins will load the entire lib and make all of its functions available. For example:")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang comment"}},[t._v("#!groovy")]),t._v("\nlibrary identifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"AS-jenkins-shared@stable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" retriever"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("modernSCM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GitSCMSource'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" credentialsId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GitHub-awsCloudOpsCJT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/NIT-Administrative-Systems/AS-jenkins-shared.git'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\npipeline "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    agent any\n\n    stages "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        stage "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Terraform'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            sh "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tfenv install && terraform -version'")]),t._v("\n            sh "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'terraform init -no-color'")]),t._v("\n            sh "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'terraform apply -no-color -auto-approve'")]),t._v("\n            sh "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'terraform output -no-color'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        stage "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Publish Secrets to SSM'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            steps "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This function is part of our shared library")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publishSecretsToSSM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'us-east-2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dev/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),a("h2",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("p",[t._v("These are the major pieces of shared functionality.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Function")]),t._v(" "),a("th",[t._v("Purpose")]),t._v(" "),a("th",[t._v("Requirements")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://github.com/NIT-Administrative-Systems/AS-jenkins-shared/blob/stable/vars/publishSecretsToSSM.groovy",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("publishSecretsToSSM")]),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Implements "),a("RouterLink",{attrs:{to:"/infrastructure/secrets.html"}},[t._v("secret management strategy")])],1),t._v(" "),a("td",[t._v("Terraform module has "),a("code",[t._v("parameters")]),t._v(" output")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://github.com/NIT-Administrative-Systems/AS-jenkins-shared/blob/stable/vars/parseJson.groovy",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("parseJson")]),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Parse JSON & return it in a serializable format")]),t._v(" "),a("td",[t._v("None")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://github.com/NIT-Administrative-Systems/AS-jenkins-shared/blob/stable/vars/publishSecretsToVapor.groovy",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("publishSecretsToVapor")]),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Implements "),a("RouterLink",{attrs:{to:"/infrastructure/secrets.html"}},[t._v("secret management strategy")]),t._v(" for Laravel Vapor")],1),t._v(" "),a("td",[a("code",[t._v(".env.{deploy-env}")]),t._v(" file has "),a("code",[t._v("VAPOR_SECRETS=")]),t._v(" list")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);