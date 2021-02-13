(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{414:function(e,t,s){"use strict";s.r(t);var a=s(8),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.soliditylang.org/en/v0.6.12/abi-spec.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Contract application binary interface (ABI)"),s("OutboundLink")],1),e._v(" is used to encode different types of data while interacting with Ethereum contracts. As a result, both Solidity and modules such as web3.js and ethers.js treat ABI encoding–decoding functionality as a first-class citizen. This makes using contract ABI for encoding API call parameters a very attractive option.")]),e._v(" "),s("p",[e._v("Although encoding API call parameters using contract ABI has many advantages, it cannot be used for this purpose directly. Quoting from the "),s("a",{attrs:{href:"https://docs.soliditylang.org/en/v0.6.12/abi-spec.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Solidity docs"),s("OutboundLink")],1),e._v(":")]),e._v(" "),s("blockquote",[s("p",[e._v("The encoding is not self describing and thus requires a schema in order to decode.")])]),e._v(" "),s("p",[e._v("This means that whenever we pass API call parameters (of type "),s("code",[e._v("bytes")]),e._v("), we would also need to pass a list of the types of these parameters, which is cumbersome (and it is not clear how these types would be encoded). As a solution, Airnode uses "),s("em",[e._v("Airnode ABI specifications")]),e._v(", an extension of contract ABI specifications that includes a header that keeps the schema.")]),e._v(" "),s("h2",{attrs:{id:"header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[e._v("#")]),e._v(" Header")]),e._v(" "),s("p",[e._v("The Airnode ABI specifications header is of type "),s("code",[e._v("bytes32")]),e._v(" and acts as the schema (i.e., describes the types of the API call parameters). The header is encoded in UTF-8 for ease of use. Here is an example:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"1BSabiuBa"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The first character, "),s("code",[e._v("1")]),e._v(", represents the encoding version. Each following character represents the type of an API call parameter.")]),e._v(" "),s("h3",{attrs:{id:"type-encodings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-encodings"}},[e._v("#")]),e._v(" Type encodings")]),e._v(" "),s("p",[e._v("The types are encoded in UTF-8 characters as follows:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("B: bytes\nS: string\na: address\nu: uint256\ni: int256\nb: bytes32\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("Note that dynamically-sized types are represented with uppercase letters, and statically-sized types are represented with lowercase letters.")]),e._v(" "),s("h2",{attrs:{id:"encoding-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encoding-format"}},[e._v("#")]),e._v(" Encoding format")]),e._v(" "),s("p",[e._v("Airnode ABI specifications has the following encoding format:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[------------------------][-----------------------------------------]\n  Header of type bytes32      API call parameter name–value pairs\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Note that each API call parameter is preceded with a name of type "),s("code",[e._v("bytes32")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"example-encoding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-encoding"}},[e._v("#")]),e._v(" Example encoding")]),e._v(" "),s("p",[e._v("If we wanted to encode the following API call parameters")]),e._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MyFirstBytes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0x1234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MyString"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MyFirstAddress"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0x0000000000000000000000000000000000001234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MyBytes32"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MyInt256"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-1234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MyUint256"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MySecondBytes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0x5678"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MySecondAddress"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0x0000000000000000000000000000000000005678"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[e._v("we would to do this in our client contract as:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('bytes memory parameters = abi.encode(\n    bytes32("1BSabiuBa"),\n    bytes32("MyFirstBytes"), bytes(hex"1234"),\n    bytes32("MyString"), "1234",\n    bytes32("MyFirstAddress"), 0x0000000000000000000000000000000000001234,\n    bytes32("MyBytes32"), bytes32("1234"),\n    bytes32("MyInt256"), -1234,\n    bytes32("MyUint256"), 1234,\n    bytes32("MySecondBytes"), bytes(hex"5678"),\n    bytes32("MySecondAddress"), 0x0000000000000000000000000000000000005678\n    );\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("Note that we did not need to add an external library to our contract, and "),s("code",[e._v("abi.encode()")]),e._v(" is fairly cheap in terms of gas usage (compared to alternative encoding methods).")]),e._v(" "),s("h2",{attrs:{id:"example-decoding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-decoding"}},[e._v("#")]),e._v(" Example decoding")]),e._v(" "),s("p",[e._v("If the user knows the schema of the encoded parameters, they can even decode them on-chain. For example, if the schema is "),s("code",[e._v("(bytes,string)")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("(\n    bytes32 header,\n    bytes32 name1, bytes memory value1,\n    bytes32 name2, string memory value2\n    ) = abi.decode(parameters, (bytes32,bytes32,bytes,bytes32,string));\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("Note that we disregarded the header and hardcoded the schema into our code. It is also possible to parse the header on-chain and decode accordingly, yet that would be a lot more complex.")]),e._v(" "),s("h2",{attrs:{id:"details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#details"}},[e._v("#")]),e._v(" Details")]),e._v(" "),s("h3",{attrs:{id:"bytes32"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bytes32"}},[e._v("#")]),e._v(" "),s("code",[e._v("bytes32")])]),e._v(" "),s("p",[e._v("A parameter being of type "),s("code",[e._v("bytes32")]),e._v(" implies that the parameter is UTF-8 encoded text. For example, if the parameter is")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("0x68656c6c6f000000000000000000000000000000000000000000000000000000\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Airnode will decode it as")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"hello"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("and feed that to the API, which is what the user would want to do in most cases.")]),e._v(" "),s("p",[e._v("This becomes a problem if the parameter is not encoded text, but for example a hash such as:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("0x1fd36c61981313c0c155d33ffac0325bd7c00d21d52442981bb13d2fa13e8f71\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("If this hash is encoded as a "),s("code",[e._v("bytes32")]),e._v(" type, Airnode will decode it as:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ÓlaÀÁUÓ?úÀ2[×À\n!Õ$B±=/¡>q\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("which is probably not what the user is looking for. Instead, the user should typecast the parameter into a "),s("code",[e._v("bytes")]),e._v(" type as:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("bytes parameterAsBytes = abi.encodePacked(parameterAsBytes32);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("and encode it as such. Then, Airnode would decode it as")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"0x1fd36c61981313c0c155d33ffac0325bd7c00d21d52442981bb13d2fa13e8f71"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"omitted-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#omitted-types"}},[e._v("#")]),e._v(" Omitted types")]),e._v(" "),s("p",[e._v("We have omitted "),s("code",[e._v("array")]),e._v(" and "),s("code",[e._v("tuple")]),e._v(" because they are not suitable to be used as API parameters. "),s("code",[e._v("uint8-uint128")]),e._v(", "),s("code",[e._v("int8-int128")]),e._v(", "),s("code",[e._v("bytes1-bytes31")]),e._v(" are omitted because they are padded to 32 bytes by the ABI encoder anyway (meaning that the user should simply typecast these to the 32-byte versions).")]),e._v(" "),s("p",[e._v("Finally, we have omitted "),s("code",[e._v("bool")]),e._v(" to avoid confusion because there are too many types that start with the letter 'B'. A simple workaround is to encode a "),s("code",[e._v("bool")]),e._v(" type parameter as "),s("code",[e._v("bytes32")]),e._v(" as:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('bytes32 boolAsBytes32 = boolAsBool ? bytes32("true") : bytes32("false");\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("This works because both "),s("code",[e._v("bool(true)")]),e._v(" and "),s("code",[e._v('bytes32("true")')]),e._v(" would be decoded as "),s("code",[e._v('"true"')]),e._v(" at the Airnode-end, and vice versa.")]),e._v(" "),s("h3",{attrs:{id:"size-limit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size-limit"}},[e._v("#")]),e._v(" Size limit")]),e._v(" "),s("p",[e._v("The header can encode up to 31 parameters (and 1 byte is used to encode the encoding version). This is far more than what would be needed in practice, and thus is tolerated to avoid a more complex solution.")]),e._v(" "),s("h3",{attrs:{id:"padding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#padding"}},[e._v("#")]),e._v(" Padding")]),e._v(" "),s("p",[e._v("We are using the "),s("a",{attrs:{href:"https://docs.soliditylang.org/en/v0.6.12/abi-spec.html#strict-encoding-mode",target:"_blank",rel:"noopener noreferrer"}},[e._v("strict encoding mode"),s("OutboundLink")],1),e._v(" so that we can decode the values later on. This means that each parameter will be padded with zeros to complete them to 32 bytes. Although this padding increases gas costs, ABI encoding/decoding functions being cheap balances this. Furthermore, the "),s("RouterLink",{attrs:{to:"/request-response-protocol/template.html"}},[e._v("template")]),e._v(" pattern we use in our protocols allows us to refer to these encoded parameters without explicitly passing them in our requests, making the increased cost induced by padding irrelevant in most cases.")],1),e._v(" "),s("h2",{attrs:{id:"api3-airnode-abi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api3-airnode-abi"}},[e._v("#")]),e._v(" "),s("code",[e._v("@api3/airnode-abi")])]),e._v(" "),s("p",[e._v("The user may need to encode and decode Airnode ABI off-chain. For that, we have published the related "),s("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/master/packages/airnode-abi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airnode monorepo package"),s("OutboundLink")],1),e._v(" under the name "),s("code",[e._v("@api3/airnode-abi")]),e._v(". You can refer to the "),s("a",{attrs:{href:"https://github.com/api3dao/airnode-starter/blob/9ec0e62b9d5edccd2b711250055b6bdb0cc049ef/scripts/make-request.js#L25",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("airnode-starter")]),s("OutboundLink")],1),e._v(" repo for an example usage.")])])}),[],!1,null,null,null);t.default=n.exports}}]);