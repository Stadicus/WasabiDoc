(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{224:function(e,t,a){"use strict";a.r(t);var i=a(17),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction-to-wasabi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-wasabi"}},[e._v("#")]),e._v(" Introduction to Wasabi")]),e._v(" "),a("h2",{attrs:{id:"the-basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-basics"}},[e._v("#")]),e._v(" The Basics")]),e._v(" "),a("details",{attrs:{id:"who-can-use-wasabi"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#who-can-use-wasabi","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Who can use Wasabi?")])]),e._v(" "),a("p",[e._v("Every single line of code in Wasabi, the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Gui",target:"_blank",rel:"noopener noreferrer"}},[e._v("wallet"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Backend",target:"_blank",rel:"noopener noreferrer"}},[e._v("backend server"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("tests"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Packager",target:"_blank",rel:"noopener noreferrer"}},[e._v("packager"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi",target:"_blank",rel:"noopener noreferrer"}},[e._v("library"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Gui/CommandLine",target:"_blank",rel:"noopener noreferrer"}},[e._v("daemon"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://wasabiwallet.io/swagger/",target:"_blank",rel:"noopener noreferrer"}},[e._v("api"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WasabiDoc",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),a("OutboundLink")],1),e._v(" - has always been and will always be libre and open source under the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/blob/master/LICENSE.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("MIT license"),a("OutboundLink")],1),e._v(".\nThis means that anyone, yes, ANYONE can use Wasabi without permission, for any use case, free of charge.")]),e._v(" "),a("p",[e._v("Wasabi is used by individuals to receive and spend every day payments, to manage their hardware wallet long term hodlings, and to CoinJoin their sats for added privacy.\nThere are also entrepreneurs who use Wasabi to defend their customers from spies and to ensure a private business relationship.\nYoung kids have Wasabi to stack the sats gifted by grandma, and they learn the importance of hodling.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Wasabi is a tool for everyone.")])])]),a("details",{attrs:{id:"what-is-a-coinjoin"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-coinjoin","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("What is a CoinJoin?")])]),e._v(" "),a("p",[e._v("A mechanism by which multiple participants combine their coins (or UTXOs, to be more precise) into one large transaction with multiple inputs and multiple outputs.\nAn observer cannot determine which output belongs to which input, and neither can the participants themselves.\nThis makes it difficult for outside parties to trace where a particular coin originated from and where it was sent to (as opposed to regular bitcoin transactions, where there is usually one sender and one receiver).")]),e._v(" "),a("p",[e._v("This can be done with non-custodial software like Wasabi that eliminates the risk of funds disappearing or being stolen.\nEach of the signatures are created on the participants’ computers after thorough verification, so nobody can alter the transaction or redirect the funds.\nThe funds will always be in a Bitcoin address that you control.")]),e._v(" "),a("p",[e._v("In very simple terms, CoinJoin means: “when you want to make a transaction, find someone else who also wants to make a transaction and make a joint transaction together”.")]),e._v(" "),a("p",[e._v("See also the "),a("a",{attrs:{href:"https://en.bitcoin.it/wiki/CoinJoin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitcoin Wiki on CoinJoins"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"do-i-need-to-trust-wasabi-with-my-coins"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#do-i-need-to-trust-wasabi-with-my-coins","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Do I need to trust Wasabi with my coins?")])]),e._v(" "),a("p",[e._v("No, Wasabi's CoinJoin implementation is trustless by design.\nThe participants do not need to trust each other or any third party.\nBoth the sending address (the CoinJoin input) and the receiving address (the CoinJoin output) are controlled by your own private keys.\nThe Wasabi server merely coordinates the process of combining the inputs of the participants into one single transaction, but the Wasabi Wallet can neither steal your coins, nor figure out which outputs belong to which inputs (look up “"),a("RouterLink",{attrs:{to:"/using-wasabi/CoinJoin.html"}},[e._v("Chaumian CoinJoin")]),e._v("” if you want to know more).")],1)]),a("details",{attrs:{id:"what-is-the-privacy-i-get-after-mixing-with-wasabi"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-privacy-i-get-after-mixing-with-wasabi","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("What is the privacy I get after mixing with Wasabi?")])]),e._v(" "),a("p",[e._v("This depends on how you handle your outputs after the CoinJoin.\nThere are some ways how you can unintentionally undo the mixing by being careless.\nFor example, if you send a mixed coin to an already used address, then anyone can see that both coins are controlled by the same entity and more importantly anyone who know that the address is yours know that you own that mixed coin.\n"),a("RouterLink",{attrs:{to:"/why-wasabi/AddressReuse.html"}},[e._v("Address reuse")]),e._v(" is very bad for your privacy.\nAnother deanonymizing scenario happens when you combine mixed outputs with unmixed ones when sending: a third party will be able to make the connection between them as belonging to the same sender.\nThis is why you need to be careful with "),a("RouterLink",{attrs:{to:"/using-wasabi/ChangeCoins.html"}},[e._v("change coins")]),e._v(".")],1),e._v(" "),a("p",[e._v("The practice of being careful with your post-mix outputs is commonly facilitated through coin control, which is the default way of interacting with the wallet.\nFind out more about coin control in "),a("RouterLink",{attrs:{to:"/why-wasabi/Coins.html"}},[e._v("here")]),e._v(".")],1)]),a("details",{attrs:{id:"can-i-hurt-my-privacy-using-wasabi"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-hurt-my-privacy-using-wasabi","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Can I hurt my privacy using Wasabi?")])]),e._v(" "),a("p",[e._v("No.\nThe worst thing that can happen (through user’s negligence post-mix) is that the level of your privacy stays the same as before the CoinJoin.\nIt is crucial to understand that Wasabi is not a fool-proof solution if you neglect to practice coin control after the mixing process.")])]),a("details",{attrs:{id:"why-is-wasabi-bitcoin-only"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-wasabi-bitcoin-only","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Why is Wasabi Bitcoin-only?")])]),e._v(" "),a("p",[e._v("There are countless reasons why it is the only logical choice to be "),a("a",{attrs:{href:"https://bitcoin-only.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitcoin-only"),a("OutboundLink")],1),e._v(".\nWith Bitcoin we have a once in a lifetime opportunity to manifest libre sound money.\nIf we succeed, then this might emerge an utmost beautiful agora of sovereign individuals.\nIf we fail, then this will conjure up the most horrific Orwellian nightmare.\nThere is no room for wasted time and energy, this Great Work requires our full attention.\nAny line of code written to support a random shitcoin takes away scarce developer time to work on real problems.")])]),a("details",{attrs:{id:"why-is-the-anonymity-set-100"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-the-anonymity-set-100","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Why is the anonymity set 100?")])]),e._v(" "),a("p",[e._v("Sufficient anonymity set is a hard question, that not yet enough research done to answer it definitively.\nThe rough consensus among many privacy researchers is that an anonymity set above 50 could be considered sufficient.\nFurthermore our calculations have shown that with the liquidity of today’s mixers our mixing rounds would take 1 to 5 minutes with 100 anonymity set and 0.1 BTC fixed denomination.")])]),a("details",{attrs:{id:"is-there-a-way-to-check-wasabi-uptime-status"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#is-there-a-way-to-check-wasabi-uptime-status","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Is there a way to check Wasabi uptime status?")])]),e._v(" "),a("p",[e._v("Yes, you can check the status of Wasabi-related services and websites (like APIs, Backend, etc.) via "),a("a",{attrs:{href:"https://stats.uptimerobot.com/YQqGyUL8A7",target:"_blank",rel:"noopener noreferrer"}},[e._v("UptimeRobot Wasabi Status Page"),a("OutboundLink")],1),e._v(".")])]),a("details",{attrs:{id:"what-software-supplies-the-block-filters-that-wasabi-uses"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#what-software-supplies-the-block-filters-that-wasabi-uses","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("What software supplies the block filters that Wasabi uses?")])]),e._v(" "),a("p",[e._v("The zkSNACKs coordinator supplies the same set of filters to every client.\nThis means you rely on the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Backend",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wasabi backend"),a("OutboundLink")],1),e._v(" providing you valid filters.\nBut because you download the blocks from a random Bitcoin peer-to-peer node - or your own node - the coordinator cannot spy on which blocks you are interested in.\nFurthermore, the random node will only know which block is needed but it won't have any clue which transaction(s) belongs to the wallet.")])]),a("details",{attrs:{id:"is-the-backend-s-coordinator-code-open-source"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#is-the-backend-s-coordinator-code-open-source","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Is the Backend's (Coordinator) code open source?")])]),e._v(" "),a("p",[e._v("Yes, you can verify the code on "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Backend",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v(".")])]),a("details",{attrs:{id:"is-there-an-android-ios-version"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#is-there-an-android-ios-version","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Is there an Android/iOs version?")])]),e._v(" "),a("p",[e._v("No, Wasabi and CoinJoin features require considerable computational power, not currently replicable on a smartphone.")])]),a("details",{attrs:{id:"where-can-i-find-wasabi-wallet-on-social-media"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-find-wasabi-wallet-on-social-media","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Where can I find Wasabi Wallet on social media?")])]),e._v(" "),a("p",[e._v("You can find us on "),a("a",{attrs:{href:"https://twitter.com/wasabiwallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://www.reddit.com/r/WasabiWallet/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reddit"),a("OutboundLink")],1),e._v(".\nFor chat groups you can find us on "),a("a",{attrs:{href:"https://join.slack.com/t/tumblebit/shared_invite/enQtNjQ1MTQ2NzQ1ODI0LWIzOTg5YTM3YmNkOTg1NjZmZTQ3NmM1OTAzYmQyYzk1M2M0MTdlZDk2OTQwNzFiNTg1ZmExNzM0NjgzY2M0Yzg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://t.me/WasabiWallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telegram"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://riot.im/app/#/room/#wasabiwallet:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Riot"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://keybase.io/team/wasabiwallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keybase"),a("OutboundLink")],1),e._v(".")])]),a("h2",{attrs:{id:"for-advanced-wasabikas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-advanced-wasabikas"}},[e._v("#")]),e._v(" For advanced Wasabikas")]),e._v(" "),a("details",{attrs:{id:"can-the-coordinator-attack-me"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#can-the-coordinator-attack-me","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Can the coordinator attack me?")])]),e._v(" "),a("p",[e._v("The nature of Wasabi is that you should not need to trust the developers or the Wasabi coordinating server, as you can verify that the code does not leak information to anyone.\nThe developers have gone to great lengths in an attempt to ensure that the coordinator cannot steal funds nor link inputs to outputs.")]),e._v(" "),a("p",[e._v("The only known possible 'malicious' actions that the server "),a("em",[e._v("could")]),e._v(" perform are two sides of the same coin;")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Blacklisted UTXO's")]),e._v(":\nThough this would not affect the users who are able to successfully mix with other 'honest/real' peers.")]),e._v(" "),a("li",[a("strong",[e._v("Targeted Sybil Attack")]),e._v(":\nThe follow-up concern is the inverse of the above.\nIt is possible that the server could "),a("em",[e._v("only")]),e._v(" include one 'honest/real' coin in the mix and supply the other coins themselves.\nThis would give a false sense of security, "),a("strong",[e._v("but it would not worsen the existing privacy of the coin")]),e._v(".\nIt would also be noticeable to all users excluding the user being targeted as their coins would not be mixed.\nIt has been argued that this 'attack' would be very costly in terms of fees because the number of coins being mixed is verifiable.\nThough it is true that fees would have to be paid to zkSNACKs every round, this does not matter if it is zkSNACKs that is acting maliciously (as they get the funds back).\nTypical rounds currently have <100 people per mix, with the minimum input being ~0.1 BTC with a fee of 0.003% per anonymity set.\nTaking the 'worst case' (100 people, each mixing 0.1 BTC) gives 0.03 BTC per round.\nThis is not prohibitive and is thus a valid concern.\nThat said, if multiple chain-analysis companies attempt to flood the zkSNACKs mix (to decrease the true anonymity set) they will hinder each other's efforts (unless they are cooperating).\nSee "),a("a",{attrs:{href:"https://github.com/nopara73/ZeroLink/#e-sybil-attack",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" for more info.")])])]),a("details",{attrs:{id:"what-is-the-history-of-wasabi"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-history-of-wasabi","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("What is the history of Wasabi?")])]),e._v(" "),a("p",[e._v("Ádám Ficsor worked with several others on a privacy-focused Bitcoin wallet called Hidden Wallet all the way "),a("a",{attrs:{href:"https://docs.google.com/drawings/d/1wLL7aSgYBWNoyzllg6_haisFt-gQCf-QUzVzQPkARts/edit",target:"_blank",rel:"noopener noreferrer"}},[e._v("back in December 2015"),a("OutboundLink")],1),e._v(".\nWasabi was unveiled in 2018 at the Building on Bitcoin conference by Ádám.\nAt the time, Wasabi was essentially HiddenWallet rebranded and rewritten from scratch with some new features.\nKey dates:")]),e._v(" "),a("ul",[a("li",[e._v("The Beta release was on August 1 (on the first anniversary of UASF.)")]),e._v(" "),a("li",[e._v("The 1.0 release was on October 31 (on the tenth anniversary of the Bitcoin Whitepaper.)")])]),e._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/XORDEX-RrAI/hqdefault.jpg)"},attrs:{"data-id":"XORDEX-RrAI"}},[a("iframe",{attrs:{title:"YouTube XORDEX-RrAI","data-src":"https://www.youtube-nocookie.com/embed/XORDEX-RrAI?start=6420&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})])]),a("details",{attrs:{id:"why-is-wasabi-libre-and-open-source-software"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-wasabi-libre-and-open-source-software","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Why is Wasabi libre and open source software?")])]),e._v(" "),a("p",[e._v("Wasabi follows the philosophy behind Bitcoin by making the software open source and by publishing it under MIT License.\nBitcoin users prefer open source software to proprietary software for a number of reasons, including:")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Control")]),e._v(" "),a("p",[e._v("Many people prefer open source software because they have more control over the software they run.")])]),e._v(" "),a("p",[e._v("They can examine the code to make sure it's not doing anything they don't want it to do, and they can change parts of it they don't like.\nUsers who aren't programmers also benefit from open source software, because they can use this software for any purpose they wish, not merely the way someone else thinks they should.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Training")]),e._v(" "),a("p",[e._v("Other people like open source software because it helps them become better programmers.")])]),e._v(" "),a("p",[e._v("Because open source code is publicly accessible, students can easily study it as they learn to make better software.\nStudents can also share their work with others, inviting comment and critique, as they develop their skills.\nWhen people discover mistakes in programs' source code, they can share those mistakes with others to help them avoid making those same mistakes themselves.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Security")]),e._v(" "),a("p",[e._v("Some people prefer open source software because they consider it more secure and stable than proprietary software.")])]),e._v(" "),a("p",[e._v("Because anyone can view and modify open source software, someone might spot and correct errors or omissions that a program's original authors might have missed.\nAnd because so many programmers can work on a piece of open source software without asking for permission from original authors, they can fix, update, and upgrade open source software more quickly than they can proprietary software.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Stability")]),e._v(" "),a("p",[e._v("Many users prefer open source software to proprietary software for important, long-term projects.")])]),e._v(" "),a("p",[e._v("Because programmers publicly distribute the source code for open source software, users relying on that software for critical tasks can be sure their tools won't disappear or fall into disrepair if their original creators stop working on them.\nAdditionally, open source software tends to both incorporate and operate according to open standards.")])]),a("details",{attrs:{id:"what-is-the-general-idea-of-zerolink-coinjoin"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-general-idea-of-zerolink-coinjoin","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("What is the general idea of ZeroLink CoinJoin?")])]),e._v(" "),a("p",[e._v("While fungibility is an essential property of good money, Bitcoin has its limitations in this area.\nNumerous fungibility improvements have been proposed; however none of them have addressed the privacy issues in full.\nZeroLink is designed so that no participant or outside observer can spy on the user.\nThe scope of ZeroLink is not limited to a single transaction, it extends to transaction chains and it addresses various network layer deanonymizations, however its scope is limited to Bitcoin's first layer.\nEven if an off-chain anonymity solution gets widely adopted, ultimately the entrance and exit transactions will always be settled on-chain.\nTherefore there will always be need for on-chain privacy.")]),e._v(" "),a("p",[e._v("Ideal fungibility requires every Bitcoin transaction to be indistinguishable from each other, but it is an unrealistic goal.\nZeroLink's objective is to break all links between separate sets of coins.\nZeroLink presents a wallet privacy framework coupled with Chaumian CoinJoin, which was first introduced in 2013 by Gregory Maxwell.\nHopefully, ZeroLink will enable the usage of Bitcoin in a fully anonymous way for the first time.")]),e._v(" "),a("p",[e._v("ZeroLink defines a pre-mix and a post-mix wallet and a mixing technique.\nPre-mix wallet functionality can be added to any Bitcoin wallet without much overhead.\nPost-mix wallets on the other hand have strong privacy requirements, regarding coin selection, private transaction and balance retrieval, transaction input and output indexing and broadcasting.\nThe requirements and recommendations for pre and post-mix wallets together define the Wallet Privacy Framework.\nCoins from pre-mix wallets to post-mix wallets are moved by mixing. Most on-chain mixing techniques, like CoinShuffle, CoinShuffle++ or TumbleBit's Classic Tumbler mode can be used.\nHowever ZeroLink defines its own mixing technique: "),a("RouterLink",{attrs:{to:"/using-wasabi/CoinJoin.html"}},[e._v("Chaumian CoinJoin")]),e._v(".")],1),e._v(" "),a("p",[e._v("For the complete explanation please read "),a("a",{attrs:{href:"https://github.com/nopara73/ZeroLink/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZeroLink: The Bitcoin Fungibility Framework"),a("OutboundLink")],1),e._v(".")])]),a("details",{attrs:{id:"what-are-the-minimal-requirements-to-run-wasabi"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-minimal-requirements-to-run-wasabi","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("What are the minimal requirements to run Wasabi?")])]),e._v(" "),a("ul",[a("li",[e._v("64-bit architecture")]),e._v(" "),a("li",[e._v("Windows 10+")]),e._v(" "),a("li",[e._v("macOS 10.13+")]),e._v(" "),a("li",[e._v("Debian 9+")]),e._v(" "),a("li",[e._v("Ubuntu 16.04+")]),e._v(" "),a("li",[e._v("For other Linux distributions, it depends on the specific OS.")])]),e._v(" "),a("p",[e._v("Click "),a("a",{attrs:{href:"https://github.com/dotnet/core/blob/master/release-notes/3.1/3.1-supported-os.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" to check if .NET Core 3.1 supports your OS.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);