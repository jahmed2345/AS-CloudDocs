(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{353:function(e,t,a){e.exports=a.p+"assets/img/cert-validation-flow.18e38ddd.png"},354:function(e,t,a){e.exports=a.p+"assets/img/cert-validation.b6ef6247.png"},387:function(e,t,a){"use strict";a.r(t);var r=a(43),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"certificates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#certificates"}},[e._v("#")]),e._v(" Certificates")]),e._v(" "),r("p",[e._v("Amazon provides X.509 certificates, most commonly used for HTTPS, through the "),r("a",{attrs:{href:"https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Certificate Manager"),r("OutboundLink")],1),e._v(" (ACM). Any certificates issued by Amazon will be short-lived auto-renewed certificates, eliminating the need for a bunch of manual configuration & webserver restarts.")]),e._v(" "),r("p",[e._v("You should always request certificates from Amazon through ACM for cloud applications. The EACD-CloudOps group does not recommend or support importing certificates issued by other CAs.")]),e._v(" "),r("p",[e._v("Amazon will only issue Domain Verified (DV) certificates. Issuing & renewing Extended Validation (EV) certificates cannot be automated, and "),r("a",{attrs:{href:"https://www.troyhunt.com/extended-validation-certificates-are-really-really-dead/",target:"_blank",rel:"noopener noreferrer"}},[e._v("no longer offer any benefit"),r("OutboundLink")],1),e._v(" over DV certs.")]),e._v(" "),r("p",[e._v("You may request a "),r("a",{attrs:{href:"https://www.ssl.com/faqs/what-is-a-san-certificate/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SAN certificate"),r("OutboundLink")],1),e._v(" that covers several domains; this is useful for a single ALB listener that covers multiple environments.")]),e._v(" "),r("p",[e._v("Any certificate that will be used by CloudFront or an edge-optimzed API gateway ("),r("a",{attrs:{href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-basic-concept.html#apigateway-definition-edge-optimized-api-endpoint",target:"_blank",rel:"noopener noreferrer"}},[e._v("which is using CloudFront"),r("OutboundLink")],1),e._v(") must be created in the "),r("code",[e._v("us-east-1")]),e._v(" region. Your app can exist in "),r("code",[e._v("us-east-2")]),e._v(", but CloudFront is a global service and it replicates all of its data from "),r("code",[e._v("us-east-1")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),r("p",[e._v("Obtaining a certificate is a multi-step process.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(353),alt:"Certificate request flow"}})]),e._v(" "),r("p",[e._v("Certificate requests should be made as IaC "),r("a",{attrs:{href:"https://www.terraform.io/docs/providers/aws/r/acm_certificate.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("with terraform"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("entapp")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("entapp.northwestern.edu")]),e._v(" zone is managed by the EACD-CloudOps team.")]),e._v(" "),r("p",[e._v("We offer an "),r("RouterLink",{attrs:{to:"/iac/available-modules.html"}},[r("code",[e._v("entapp")]),e._v(" certificate module")]),e._v(", and can offer expedited processing on DNS requests for this zone.")],1)]),e._v(" "),r("p",[e._v("When you create a certificate request, ACM requires you to prove that you own the domain(s) you are requesting a certificate for. Until this is done, ACM will not create a certificate & attempting to reference the ARN in terraform will fail.")]),e._v(" "),r("p",[e._v("The request will be visible in the ACM console, at the 'Pending Validation' status. Amazon will ask you to create a subdomain for each domain you've requested a certificate for. Being able to create a subdomain on the requested domain(s) proves that you control that domain.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(354),alt:"ACM certificate request"}})]),e._v(" "),r("p",[e._v("You will need to open a ticket for "),r("code",[e._v("NUIT-CI-SO-SOC")]),e._v(" asking to create these DNS records for you:")]),e._v(" "),r("blockquote",[e._v("\nHi SOC,\n"),r("br"),r("br"),e._v("\nCan you please create the following new CNAME for AWS cert validation:\n"),r("br"),r("br"),e._v("\nCNAME: _d6486a2a6c2aecc5999c9263cd6ca914.as-ado-test.northwestern.edu."),r("br"),e._v("\nTarget: _da2e93d6b676aad059a9995c82895502.mzlfeqexyx.acm-validations.aws.\n"),r("br"),r("br"),e._v("\nNote that the leading underscores are significant; please make sure they get copy-pasted!\n"),r("br"),r("br"),e._v("\nThank you for your help.\n")]),e._v(" "),r("p",[e._v("This must be completed within 72 hours or Amazon will abandon the certificate request. If that happens, you will need to delete the request and start over.")]),e._v(" "),r("p",[e._v("The DNS records created are "),r("strong",[e._v("only")]),e._v(" for establishing ownership of the domain and issuing the certificates. These records will not set up DNS for "),r("code",[e._v("as-ado-test.northwestern.edu")]),e._v("; you will need to make a separate request for that.")]),e._v(" "),r("p",[e._v("These records must remain in DNS for the lifetime of the certificate. AWS re-checks them when it comes time to renew the certificate.")])])}),[],!1,null,null,null);t.default=o.exports}}]);