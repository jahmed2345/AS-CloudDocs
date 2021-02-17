(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{395:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tagging-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tagging-resources"}},[t._v("#")]),t._v(" Tagging Resources")]),t._v(" "),a("p",[t._v("AWS allows developers to tag most resources with up to 50 custom key:value pairs. In Administrative Systems, we have two uses for tags: cost breakdown (from the AWS Cost Explorer), and use with IAM/snapshot/bucket ACL policies.")]),t._v(" "),a("p",[t._v("Beyond our standard tags, developers are free to add additional tags in whatever way makes sense for that application. AWS has some "),a("a",{attrs:{href:"https://aws.amazon.com/answers/account-management/aws-tagging-strategies/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ideas on tagging strategies"),a("OutboundLink")],1),t._v(" for things like clusters & security.")]),t._v(" "),a("h2",{attrs:{id:"standard-tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standard-tags"}},[t._v("#")]),t._v(" Standard Tags")]),t._v(" "),a("p",[t._v("We only require two standard tags. All resources that support tagging should have these tags.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Tag Name")]),t._v(" "),a("th",[t._v("Value")]),t._v(" "),a("th",[t._v("Purpose")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Application")]),t._v(" "),a("td",[t._v("The name of your app, which MUST be consistent across envrionments")]),t._v(" "),a("td",[t._v("Cost analysis")])]),t._v(" "),a("tr",[a("td",[t._v("Environment")]),t._v(" "),a("td",[t._v("App environment, like dev/QA/prod")]),t._v(" "),a("td",[t._v("Cost analysis")])])])]),t._v(" "),a("p",[t._v("Note that tag names "),a("strong",[t._v("are case-sensitive")]),t._v(". Take care to use the correct case for our standard tag names.")]),t._v(" "),a("p",[t._v("Adding these tags across all resources in Terraform is easy:")]),t._v(" "),a("div",{staticClass:"language-hcl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hcl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add a tags.tf file, or put these locals in your variables.tf")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("locals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("tags")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("Application")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" var.app_name\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("Environment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" var.env\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# And then across (almost) all your TF resource blocks:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resource "),a("span",{pre:!0,attrs:{class:"token type variable"}},[t._v('"aws_s3_bucket"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app_code_bucket"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bucket")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-unique-bucket-name"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("acl")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("tags")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" local.tags\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If you need to add some additional tags, you can still use the local:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resource "),a("span",{pre:!0,attrs:{class:"token type variable"}},[t._v('"aws_s3_bucket"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app_code_bucket"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bucket")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-unique-bucket-name"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("acl")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("tags")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" merge(local.tags, "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("LambdaSourceCode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(")\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("You can check the Terraform AWS provider documentation for each resource to determine if it supports tags. Alternatively, you can apply tags to every resource and remove them from whatever "),a("code",[t._v("terraform plan")]),t._v(" complains about.")])])}),[],!1,null,null,null);s.default=n.exports}}]);