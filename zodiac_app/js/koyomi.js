function butotnClick() {
  var elements = document.getElementsByName("jend");

  for (var a = "", i = elements.length; i--; ) {
    if (elements[i].checked) {
      var a = elements[i].value;
      break;
    }
  }

  if (a === "") {
    // 未選択状態
  } else {
    console.log(a);
  }

  let str = document.getElementById("wareki").value;
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let hour = document.getElementById("hour").value;
  let min = document.getElementById("min").value;
  let msg = document.getElementById("msg");
  let msg2 = document.getElementById("msg2");
  let msg3 = document.getElementById("msg3");
  let msg4 = document.getElementById("msg4");
  let msg5 = document.getElementById("msg5");
  let msgdaiun = document.getElementById("msgdaiun");
  let msgdaiun1 = document.getElementById("msgdaiun1");
  let msgdaiun2 = document.getElementById("msgdaiun2");
  let msgdaiun3 = document.getElementById("msgdaiun3");
  let msgdaiun4 = document.getElementById("msgdaiun4");
  let msgdaiun5 = document.getElementById("msgdaiun5");
  let msgdaiun6 = document.getElementById("msgdaiun6");

  let amari = 0;
  let amarisi = 0;
  let output = "";

  var setuiri = [
    //1926(昭和１)
    new Date(-1388095500000),
    new Date(-1385547660000),
    new Date(-1382976000000),
    new Date(-1380364860000),
    new Date(-1377708660000),
    new Date(-1375013880000),
    new Date(-1372298040000),
    new Date(-1369584900000),
    new Date(-1366897440000),
    new Date(-1364250900000),
    new Date(-1361649120000),
    new Date(-1359084060000),
    //1927(昭和2)
    new Date(-1356538500000),
    new Date(-1353990540000),
    new Date(-1351418940000),
    new Date(-1348807980000),
    new Date(-1346151960000),
    new Date(-1343457300000),
    new Date(-1340741400000),
    new Date(-1338028080000),
    new Date(-1335340440000),
    new Date(-1332693840000),
    new Date(-1330092180000),
    new Date(-1327527180000),
    //1928(昭和3)
    new Date(-1324981680000),
    new Date(-1322433780000),
    new Date(-1319862120000),
    new Date(-1317251100000),
    new Date(-1314594960000),
    new Date(-1311900120000),
    new Date(-1309184100000),
    new Date(-1306470720000),
    new Date(-1303783080000),
    new Date(-1301136540000),
    new Date(-1298535000000),
    new Date(-1295970120000),
    //1929(昭和4)
    new Date(-1293424620000),
    new Date(-1290876660000),
    new Date(-1288304880000),
    new Date(-1285693680000),
    new Date(-1283037540000),
    new Date(-1280342940000),
    new Date(-1277627280000),
    new Date(-1274914260000),
    new Date(-1272226800000),
    new Date(-1269580320000),
    new Date(-1266978720000),
    new Date(-1264413780000),
    //1930(昭和5)
    new Date(-1261868220000),
    new Date(-1259320080000),
    new Date(-1256748180000),
    new Date(-1254136920000),
    new Date(-1251480720000),
    new Date(-1248786120000),
    new Date(-1246070400000),
    new Date(-1243357320000),
    new Date(-1240669860000),
    new Date(-1238023320000),
    new Date(-1235421540000),
    new Date(-1232856540000),
    //1931(昭和6)
    new Date(-1230311040000),
    new Date(-1227763140000),
    new Date(-1225191420000),
    new Date(-1222580340000),
    new Date(-1219924200000),
    new Date(-1217229480000),
    new Date(-1214513640000),
    new Date(-1211800500000),
    new Date(-1209112920000),
    new Date(-1206466380000),
    new Date(-1203864600000),
    new Date(-1201299540000),
    //1932(昭和7)
    new Date(-1198754040000),
    new Date(-1196206200000),
    new Date(-1193634600000),
    new Date(-1191023580000),
    new Date(-1188367500000),
    new Date(-1185672720000),
    new Date(-1182956820000),
    new Date(-1180243680000),
    new Date(-1177556220000),
    new Date(-1174909800000),
    new Date(-1172308200000),
    new Date(-1169743260000),
    //1933(昭和8)
    new Date(-1167197820000),
    new Date(-1164649860000),
    new Date(-1162078080000),
    new Date(-1159466940000),
    new Date(-1156810620000),
    new Date(-1154115720000),
    new Date(-1151399700000),
    new Date(-1148686440000),
    new Date(-1145998860000),
    new Date(-1143352560000),
    new Date(-1140751020000),
    new Date(-1138186080000),
    //1934(昭和9)
    new Date(-1135640580000),
    new Date(-1133092560000),
    new Date(-1130520780000),
    new Date(-1127909760000),
    new Date(-1125253740000),
    new Date(-1122559080000),
    new Date(-1119843300000),
    new Date(-1117130160000),
    new Date(-1114442580000),
    new Date(-1111796040000),
    new Date(-1109194380000),
    new Date(-1106629380000),
    //1935(昭和10)
    new Date(-1104083820000),
    new Date(-1101535860000),
    new Date(-1098964140000),
    new Date(-1096353180000),
    new Date(-1093697280000),
    new Date(-1091002680000),
    new Date(-1088286840000),
    new Date(-1085573520000),
    new Date(-1082885700000),
    new Date(-1080239040000),
    new Date(-1077637320000),
    new Date(-1075072500000),
    //1936(昭和11)
    new Date(-1072527180000),
    new Date(-1069979400000),
    new Date(-1067407800000),
    new Date(-1064796780000),
    new Date(-1062140580000),
    new Date(-1059445740000),
    new Date(-1056729660000),
    new Date(-1054016160000),
    new Date(-1051328340000),
    new Date(-1048681620000),
    new Date(-1046079900000),
    new Date(-1043515020000),
    //1937(昭和12)
    new Date(-1040969760000),
    new Date(-1038422040000),
    new Date(-1035850500000),
    new Date(-1033239480000),
    new Date(-1030583340000),
    new Date(-1027888620000),
    new Date(-1025172840000),
    new Date(-1022459640000),
    new Date(-1019772000000),
    new Date(-1017125340000),
    new Date(-1014523440000),
    new Date(-1011958380000),
    //1938(昭和13)
    new Date(-1009412880000),
    new Date(-1006865100000),
    new Date(-1004293560000),
    new Date(-1001682660000),
    new Date(-999026700000),
    new Date(-996331980000),
    new Date(-993616080000),
    new Date(-990902820000),
    new Date(-988215060000),
    new Date(-985568280000),
    new Date(-982966260000),
    new Date(-980401020000),
    //1939(昭和14)
    new Date(-977855520000),
    new Date(-975307740000),
    new Date(-972736380000),
    new Date(-970125720000),
    new Date(-967469940000),
    new Date(-964775280000),
    new Date(-962059260000),
    new Date(-959345760000),
    new Date(-956657880000),
    new Date(-954010980000),
    new Date(-951408960000),
    new Date(-948843720000),
    //1940(昭和15)
    new Date(-946298160000),
    new Date(-943750320000),
    new Date(-941178960000),
    new Date(-938568300000),
    new Date(-935912580000),
    new Date(-933218160000),
    new Date(-930502320000),
    new Date(-927788880000),
    new Date(-925101000000),
    new Date(-922454220000),
    new Date(-919852380000),
    new Date(-917287260000),
    //1941(昭和16)
    new Date(-914741700000),
    new Date(-912193800000),
    new Date(-909622140000),
    new Date(-907011300000),
    new Date(-904355400000),
    new Date(-901660800000),
    new Date(-898945020000),
    new Date(-896231640000),
    new Date(-893543760000),
    new Date(-890896860000),
    new Date(-888294900000),
    new Date(-885729780000),
    //1942(昭和17)
    new Date(-883184220000),
    new Date(-880636260000),
    new Date(-878064600000),
    new Date(-875453760000),
    new Date(-872797980000),
    new Date(-870103620000),
    new Date(-867388080000),
    new Date(-864674940000),
    new Date(-861987180000),
    new Date(-859340280000),
    new Date(-856738080000),
    new Date(-854172780000),
    //1943(昭和18)
    new Date(-851627100000),
    new Date(-849079140000),
    new Date(-846507660000),
    new Date(-843896880000),
    new Date(-841241160000),
    new Date(-838546860000),
    new Date(-835831260000),
    new Date(-833118060000),
    new Date(-830430240000),
    new Date(-827783340000),
    new Date(-825181260000),
    new Date(-822616020000),
    //1944(昭和19)
    new Date(-820070400000),
    new Date(-817522560000),
    new Date(-814951140000),
    new Date(-812340360000),
    new Date(-809684400000),
    new Date(-806989740000),
    new Date(-804273840000),
    new Date(-801560460000),
    new Date(-798872640000),
    new Date(-796225860000),
    new Date(-793623900000),
    new Date(-791058720000),
    //1945(昭和20)
    new Date(-788513100000),
    new Date(-785965200000),
    new Date(-783393720000),
    new Date(-780782880000),
    new Date(-778126980000),
    new Date(-775432440000),
    new Date(-772716780000),
    new Date(-770003640000),
    new Date(-767316060000),
    new Date(-764669400000),
    new Date(-762067500000),
    new Date(-759502320000),
    //1946(昭和21)
    new Date(-756956580000),
    new Date(-754408560000),
    new Date(-751836900000),
    new Date(-749226060000),
    new Date(-746570280000),
    new Date(-743875860000),
    new Date(-741160140000),
    new Date(-738446880000),
    new Date(-735759120000),
    new Date(-733112340000),
    new Date(-730510320000),
    new Date(-727945140000),
    //1947(昭和22)
    new Date(-725399580000),
    new Date(-722851740000),
    new Date(-720280320000),
    new Date(-717669540000),
    new Date(-715013820000),
    new Date(-712319280000),
    new Date(-709603440000),
    new Date(-706889940000),
    new Date(-704201880000),
    new Date(-701554920000),
    new Date(-698952900000),
    new Date(-696387780000),
    //1948(昭和23)
    new Date(-693842340000),
    new Date(-691294620000),
    new Date(-688723320000),
    new Date(-686112600000),
    new Date(-683460420000),
    new Date(-680765940000),
    new Date(-678050160000),
    new Date(-675336780000),
    new Date(-672648840000),
    new Date(-669998340000),
    new Date(-667396380000),
    new Date(-664831320000),
    //1949(昭和24)
    new Date(-662285880000),
    new Date(-659738160000),
    new Date(-657166800000),
    new Date(-654559680000),
    new Date(-651903780000),
    new Date(-649209180000),
    new Date(-646493280000),
    new Date(-643779840000),
    new Date(-641091900000),
    new Date(-638441280000),
    new Date(-635839140000),
    new Date(-633273960000),
    //1950(昭和25)
    new Date(-630728400000),
    new Date(-628180740000),
    new Date(-625609440000),
    new Date(-622998900000),
    new Date(-620343300000),
    new Date(-617652540000),
    new Date(-614936760000),
    new Date(-612223440000),
    new Date(-609535560000),
    new Date(-606884880000),
    new Date(-604282560000),
    new Date(-601717080000),
    //1951(昭和26)
    new Date(-599171340000),
    new Date(-596623560000),
    new Date(-594052380000),
    new Date(-591442020000),
    new Date(-588790200000),
    new Date(-586096020000),
    new Date(-583380360000),
    new Date(-580666920000),
    new Date(-577978860000),
    new Date(-575328180000),
    new Date(-572725980000),
    new Date(-570160620000),
    //1952(昭和27)
    new Date(-567615000000),
    new Date(-565067160000),
    new Date(-562495920000),
    new Date(-559885440000),
    new Date(-557229960000),
    new Date(-554535540000),
    new Date(-551819700000),
    new Date(-549106080000),
    new Date(-546417960000),
    new Date(-543770820000),
    new Date(-541168680000),
    new Date(-538603440000),
    //1953(昭和28)
    new Date(-536057820000),
    new Date(-533509980000),
    new Date(-530938620000),
    new Date(-528328020000),
    new Date(-525672420000),
    new Date(-522978180000),
    new Date(-520262700000),
    new Date(-517549500000),
    new Date(-514861620000),
    new Date(-512214540000),
    new Date(-509612280000),
    new Date(-507046920000),
    //1954(昭和29)
    new Date(-504501240000),
    new Date(-501953340000),
    new Date(-499381860000),
    new Date(-496771200000),
    new Date(-494115660000),
    new Date(-491421540000),
    new Date(-488706000000),
    new Date(-485992800000),
    new Date(-483304920000),
    new Date(-480657720000),
    new Date(-478055340000),
    new Date(-475489860000),
    //1955(昭和30)
    new Date(-472944180000),
    new Date(-470396520000),
    new Date(-467825280000),
    new Date(-465214860000),
    new Date(-462559320000),
    new Date(-459864960000),
    new Date(-457149240000),
    new Date(-454435740000),
    new Date(-451747680000),
    new Date(-449100420000),
    new Date(-446498040000),
    new Date(-443932560000),
    //1956(昭和31)
    new Date(-441386940000),
    new Date(-438839220000),
    new Date(-436268100000),
    new Date(-433657680000),
    new Date(-431002200000),
    new Date(-428307840000),
    new Date(-425592060000),
    new Date(-422878740000),
    new Date(-420190800000),
    new Date(-417543780000),
    new Date(-414941580000),
    new Date(-412376220000),
    //1957(昭和32)
    new Date(-409830540000),
    new Date(-407282700000),
    new Date(-404711340000),
    new Date(-402100860000),
    new Date(-399445260000),
    new Date(-396750900000),
    new Date(-394035060000),
    new Date(-391321620000),
    new Date(-388633620000),
    new Date(-385986540000),
    new Date(-383384340000),
    new Date(-380818980000),
    //1958(昭和33)
    new Date(-378273300000),
    new Date(-375725400000),
    new Date(-373154040000),
    new Date(-370543620000),
    new Date(-367888200000),
    new Date(-365194020000),
    new Date(-362478360000),
    new Date(-359764920000),
    new Date(-357076800000),
    new Date(-354429600000),
    new Date(-351827220000),
    new Date(-349261800000),
    //1959(昭和34)
    new Date(-346716060000),
    new Date(-344168220000),
    new Date(-341596980000),
    new Date(-338986560000),
    new Date(-336331260000),
    new Date(-333637140000),
    new Date(-330921600000),
    new Date(-328208100000),
    new Date(-325519860000),
    new Date(-322872540000),
    new Date(-320270220000),
    new Date(-317704920000),
    //1960(昭和35)
    new Date(-315159420000),
    new Date(-312611820000),
    new Date(-310040640000),
    new Date(-307430160000),
    new Date(-304774620000),
    new Date(-302080320000),
    new Date(-299364420000),
    new Date(-296650800000),
    new Date(-293962440000),
    new Date(-291315060000),
    new Date(-288712680000),
    new Date(-286147320000),
    //1961(昭和36)
    new Date(-283601820000),
    new Date(-281054220000),
    new Date(-278483100000),
    new Date(-275872680000),
    new Date(-273217140000),
    new Date(-270522840000),
    new Date(-267807180000),
    new Date(-265093920000),
    new Date(-262405860000),
    new Date(-259758540000),
    new Date(-257156040000),
    new Date(-254590440000),
    //1962(昭和37)
    new Date(-252044700000),
    new Date(-249496920000),
    new Date(-246925800000),
    new Date(-244315560000),
    new Date(-241660260000),
    new Date(-238966140000),
    new Date(-236250540000),
    new Date(-233537160000),
    new Date(-230849100000),
    new Date(-228201720000),
    new Date(-225599100000),
    new Date(-223033380000),
    //1963(昭和38)
    new Date(-220487580000),
    new Date(-217939920000),
    new Date(-215368980000),
    new Date(-212758860000),
    new Date(-210103680000),
    new Date(-207409560000),
    new Date(-204693720000),
    new Date(-201980100000),
    new Date(-199291680000),
    new Date(-196644240000),
    new Date(-194041620000),
    new Date(-191476020000),
    //1964(昭和39)
    new Date(-188930220000),
    new Date(-186382500000),
    new Date(-183811440000),
    new Date(-181201320000),
    new Date(-178546140000),
    new Date(-175852080000),
    new Date(-173136480000),
    new Date(-170423040000),
    new Date(-167734860000),
    new Date(-165087480000),
    new Date(-162485100000),
    new Date(-159919620000),
    //1965(昭和40)
    new Date(-157373880000),
    new Date(-154826040000),
    new Date(-152254740000),
    new Date(-149644380000),
    new Date(-146989140000),
    new Date(-144295080000),
    new Date(-141579540000),
    new Date(-138866100000),
    new Date(-136177920000),
    new Date(-133530540000),
    new Date(-130927980000),
    new Date(-128362440000),
    //1966(昭和41)
    new Date(-125816700000),
    new Date(-123268920000),
    new Date(-120697680000),
    new Date(-118087380000),
    new Date(-115432200000),
    new Date(-112738200000),
    new Date(-110022780000),
    new Date(-107309460000),
    new Date(-104621280000),
    new Date(-101973780000),
    new Date(-99371040000),
    new Date(-96805320000),
    //1967(昭和42)
    new Date(-94259460000),
    new Date(-91711740000),
    new Date(-89140680000),
    new Date(-86530500000),
    new Date(-83875380000),
    new Date(-81181440000),
    new Date(-78466020000),
    new Date(-75752700000),
    new Date(-73064520000),
    new Date(-70417140000),
    new Date(-67814520000),
    new Date(-65248920000),
    //1968(昭和43)
    new Date(-62703180000),
    new Date(-60155520000),
    new Date(-57584520000),
    new Date(-54974340000),
    new Date(-52319040000),
    new Date(-49624860000),
    new Date(-46909080000),
    new Date(-44195580000),
    new Date(-41507280000),
    new Date(-38859900000),
    new Date(-36257400000),
    new Date(-33691860000),
    //1969(昭和44)
    new Date(-31146180000),
    new Date(-28598460000),
    new Date(-26027340000),
    new Date(-23417100000),
    new Date(-20761800000),
    new Date(-18067680000),
    new Date(-15352080000),
    new Date(-12638760000),
    new Date(-9950640000),
    new Date(-7303380000),
    new Date(-4700880000),
    new Date(-2135280000),
    //1970(昭和45)
    new Date(410520000),
    new Date(2958360000),
    new Date(5529540000),
    new Date(8139720000),
    new Date(10794840000),
    new Date(13488720000),
    new Date(16204260000),
    new Date(18917640000),
    new Date(21605880000),
    new Date(24253320000),
    new Date(26855880000),
    new Date(29421480000),
    //1971(昭和46)
    new Date(31967100000),
    new Date(34514760000),
    new Date(37085700000),
    new Date(39695760000),
    new Date(42350880000),
    new Date(45044940000),
    new Date(47760660000),
    new Date(50474400000),
    new Date(53163000000),
    new Date(55810740000),
    new Date(58413420000),
    new Date(60978960000),
    //1972(昭和47)
    new Date(63524520000),
    new Date(66072000000),
    new Date(68642880000),
    new Date(71252940000),
    new Date(73908060000),
    new Date(76602120000),
    new Date(79317780000),
    new Date(82031340000),
    new Date(84719700000),
    new Date(87367320000),
    new Date(89970000000),
    new Date(92535540000),
    //1973(昭和48)
    new Date(95081160000),
    new Date(97628640000),
    new Date(100199580000),
    new Date(102809640000),
    new Date(105464760000),
    new Date(108158820000),
    new Date(110874420000),
    new Date(113587980000),
    new Date(116276400000),
    new Date(118924080000),
    new Date(121526880000),
    new Date(124092660000),
    //1974(昭和49)
    new Date(126638400000),
    new Date(129186000000),
    new Date(131756820000),
    new Date(134366700000),
    new Date(137021640000),
    new Date(139715520000),
    new Date(142431060000),
    new Date(145144620000),
    new Date(147833100000),
    new Date(150480900000),
    new Date(153083880000),
    new Date(155649900000),
    //1975(昭和50)
    new Date(158195880000),
    new Date(160743540000),
    new Date(163314480000),
    new Date(165924120000),
    new Date(168578820000),
    new Date(171272520000),
    new Date(173987940000),
    new Date(176701500000),
    new Date(179389980000),
    new Date(182037720000),
    new Date(184640580000),
    new Date(187206420000),
    //1976(昭和51)
    new Date(189752280000),
    new Date(192300000000),
    new Date(194870880000),
    new Date(197480820000),
    new Date(200135640000),
    new Date(202829460000),
    new Date(205545060000),
    new Date(208258740000),
    new Date(210947280000),
    new Date(213595080000),
    new Date(216197940000),
    new Date(218763660000),
    //1977(昭和52)
    new Date(221309520000),
    new Date(223857240000),
    new Date(226428240000),
    new Date(229038360000),
    new Date(231693360000),
    new Date(234387120000),
    new Date(237102480000),
    new Date(239815800000),
    new Date(242504160000),
    new Date(245151840000),
    new Date(247754760000),
    new Date(250320660000),
    //1978(昭和53)
    new Date(252866640000),
    new Date(255414420000),
    new Date(257985480000),
    new Date(260595420000),
    new Date(263250540000),
    new Date(265944120000),
    new Date(268659420000),
    new Date(271372680000),
    new Date(274060980000),
    new Date(276708660000),
    new Date(279311640000),
    new Date(281877600000),
    //1979(昭和54)
    new Date(284423520000),
    new Date(286971180000),
    new Date(289542000000),
    new Date(292151880000),
    new Date(294806820000),
    new Date(297500700000),
    new Date(300216300000),
    new Date(302929860000),
    new Date(305618400000),
    new Date(308266200000),
    new Date(310869180000),
    new Date(313435080000),
    //1980(昭和55)
    new Date(315980940000),
    new Date(318528600000),
    new Date(321099420000),
    new Date(323709300000),
    new Date(326364300000),
    new Date(329058240000),
    new Date(331773840000),
    new Date(334487340000),
    new Date(337175640000),
    new Date(339823200000),
    new Date(342425940000),
    new Date(344991720000),
    //1981(昭和56)
    new Date(347537580000),
    new Date(350085360000),
    new Date(352656300000),
    new Date(355266300000),
    new Date(357921300000),
    new Date(360615180000),
    new Date(363330720000),
    new Date(366044220000),
    new Date(368732580000),
    new Date(371380200000),
    new Date(373982940000),
    new Date(376548720000),
    //1982(昭和57)
    new Date(379094580000),
    new Date(381642360000),
    new Date(384213300000),
    new Date(386823180000),
    new Date(389478000000),
    new Date(392171760000),
    new Date(394887300000),
    new Date(397600920000),
    new Date(400289520000),
    new Date(402937320000),
    new Date(405540240000),
    new Date(408106080000),
    //1983(昭和58)
    new Date(410651940000),
    new Date(413199600000),
    new Date(415770420000),
    new Date(418380240000),
    new Date(421035060000),
    new Date(423728760000),
    new Date(426444180000),
    new Date(429157800000),
    new Date(431846400000),
    new Date(434494260000),
    new Date(437097180000),
    new Date(439662840000),
    //1984(昭和59)
    new Date(442208460000),
    new Date(444755940000),
    new Date(447326700000),
    new Date(449936520000),
    new Date(452591460000),
    new Date(455285340000),
    new Date(458000940000),
    new Date(460714680000),
    new Date(463403400000),
    new Date(466051380000),
    new Date(468654360000),
    new Date(471220080000),
    //1985(昭和60)
    new Date(473765700000),
    new Date(476313120000),
    new Date(478883760000),
    new Date(481493640000),
    new Date(484148580000),
    new Date(486842400000),
    new Date(489557940000),
    new Date(492271440000),
    new Date(494959980000),
    new Date(497607900000),
    new Date(500210940000),
    new Date(502776960000),
    //1986(昭和61)
    new Date(505322880000),
    new Date(507870480000),
    new Date(510441120000),
    new Date(513050760000),
    new Date(515705460000),
    new Date(518399040000),
    new Date(521114460000),
    new Date(523827960000),
    new Date(526516500000),
    new Date(529164420000),
    new Date(531767580000),
    new Date(534333660000),
    //1987(昭和62)
    new Date(536879580000),
    new Date(539427120000),
    new Date(541997640000),
    new Date(544607040000),
    new Date(547261560000),
    new Date(549955140000),
    new Date(552670740000),
    new Date(555384540000),
    new Date(558073440000),
    new Date(560721600000),
    new Date(563324760000),
    new Date(565890720000),
    //1988(昭和63)
    new Date(568436640000),
    new Date(570984180000),
    new Date(573554820000),
    new Date(576164340000),
    new Date(578818920000),
    new Date(581512500000),
    new Date(584227980000),
    new Date(586941600000),
    new Date(589630320000),
    new Date(592278300000),
    new Date(594881340000),
    new Date(597447240000),

    //1989（平成１）
    new Date(599993160000),
    new Date(602540820000),
    new Date(605111640000),
    new Date(607721400000),
    new Date(610376040000),
    new Date(613069500000),
    new Date(615784740000),
    new Date(618498240000),
    new Date(621186840000),
    new Date(623834820000),
    new Date(626438040000),
    new Date(629004060000),
    //1990（平成2）
    new Date(631549980000),
    new Date(634097640000),
    new Date(636668340000),
    new Date(639277980000),
    new Date(641932500000),
    new Date(644625960000),
    new Date(647341200000),
    new Date(650054760000),
    new Date(652743420000),
    new Date(655391640000),
    new Date(657994980000),
    new Date(660561240000),
    //1991（平成3）
    new Date(663107280000),
    new Date(665654880000),
    new Date(668225520000),
    new Date(670835100000),
    new Date(673489620000),
    new Date(676183080000),
    new Date(678898380000),
    new Date(681611820000),
    new Date(684300420000),
    new Date(686948460000),
    new Date(689551680000),
    new Date(692117760000),
    //1992（平成4）
    new Date(694663740000),
    new Date(697211280000),
    new Date(699781920000),
    new Date(702391500000),
    new Date(705046140000),
    new Date(707739720000),
    new Date(710455200000),
    new Date(713168820000),
    new Date(715857480000),
    new Date(718505520000),
    new Date(721108620000),
    new Date(723674640000),
    //1993（平成5）
    new Date(726220620000),
    new Date(728768220000),
    new Date(731338980000),
    new Date(733948620000),
    new Date(736603320000),
    new Date(739296900000),
    new Date(742012320000),
    new Date(744725880000),
    new Date(747414480000),
    new Date(750062400000),
    new Date(752665560000),
    new Date(755231640000),
    //1994（平成6）
    new Date(757777680000),
    new Date(760325460000),
    new Date(762896280000),
    new Date(765505920000),
    new Date(768160440000),
    new Date(770853900000),
    new Date(773569140000),
    new Date(776282640000),
    new Date(778971300000),
    new Date(781619340000),
    new Date(784222560000),
    new Date(786788580000),
    //1995（平成7）
    new Date(789334440000),
    new Date(791881980000),
    new Date(794452560000),
    new Date(797062080000),
    new Date(799716600000),
    new Date(802410120000),
    new Date(805125660000),
    new Date(807839520000),
    new Date(810528540000),
    new Date(813176820000),
    new Date(815780160000),
    new Date(818346120000),
    //1996（平成8）
    new Date(820891860000),
    new Date(823439280000),
    new Date(826009800000),
    new Date(828619320000),
    new Date(831273960000),
    new Date(833967660000),
    new Date(836683200000),
    new Date(839396940000),
    new Date(842085720000),
    new Date(844733940000),
    new Date(847337220000),
    new Date(849903240000),
    //1997（平成9）
    new Date(852449040000),
    new Date(854996520000),
    new Date(857567040000),
    new Date(860176560000),
    new Date(862831140000),
    new Date(865524780000),
    new Date(868240140000),
    new Date(870953760000),
    new Date(873642540000),
    new Date(876290700000),
    new Date(878894100000),
    new Date(881460300000),
    //1998（平成10）
    new Date(884006280000),
    new Date(886553820000),
    new Date(889124220000),
    new Date(891733500000),
    new Date(894387780000),
    new Date(897081180000),
    new Date(899796600000),
    new Date(902510400000),
    new Date(905199360000),
    new Date(907847760000),
    new Date(910451280000),
    new Date(913017720000),
    //1999（平成11）
    new Date(915563820000),
    new Date(918111420000),
    new Date(920681880000),
    new Date(923291100000),
    new Date(925945260000),
    new Date(928638540000),
    new Date(931353900000),
    new Date(934067640000),
    new Date(936756600000),
    new Date(939404880000),
    new Date(942008280000),
    new Date(944574420000),
    //2000（平成12）
    new Date(947120460000),
    new Date(949668000000),
    new Date(952238580000),
    new Date(954847920000),
    new Date(957502200000),
    new Date(960195540000),
    new Date(962910840000),
    new Date(965624580000),
    new Date(968313540000),
    new Date(970961880000),
    new Date(973565280000),
    new Date(976131420000),
    //2001（平成13）
    new Date(978677340000),
    new Date(981224940000),
    new Date(983795520000),
    new Date(986405040000),
    new Date(989059500000),
    new Date(991752840000),
    new Date(994468020000),
    new Date(997181520000),
    new Date(999870360000),
    new Date(1002518700000),
    new Date(1005122220000),
    new Date(1007688540000),
    //2002（平成14）
    new Date(1010234580000),
    new Date(1012782240000),
    new Date(1015352880000),
    new Date(1017962280000),
    new Date(1020616620000),
    new Date(1023309900000),
    new Date(1026024960000),
    new Date(1028738340000),
    new Date(1031427060000),
    new Date(1034075340000),
    new Date(1036678920000),
    new Date(1039245240000),
    //2003（平成15）
    new Date(1041791280000),
    new Date(1044338700000),
    new Date(1046909100000),
    new Date(1049518320000),
    new Date(1052172600000),
    new Date(1054866000000),
    new Date(1057581360000),
    new Date(1060295040000),
    new Date(1062984000000),
    new Date(1065632460000),
    new Date(1068235980000),
    new Date(1070802300000),
    //2004（平成16）
    new Date(1073348340000),
    new Date(1075895760000),
    new Date(1078466160000),
    new Date(1081075380000),
    new Date(1083729720000),
    new Date(1086423240000),
    new Date(1089138660000),
    new Date(1091852400000),
    new Date(1094541180000),
    new Date(1097189340000),
    new Date(1099792740000),
    new Date(1102358940000),
    //2005（平成17）
    new Date(1104904980000),
    new Date(1107452580000),
    new Date(1110023100000),
    new Date(1112632440000),
    new Date(1115286780000),
    new Date(1117980120000),
    new Date(1120695420000),
    new Date(1123408980000),
    new Date(1126097820000),
    new Date(1128745980000),
    new Date(1131349320000),
    new Date(1133915580000),
    //2006（平成18）
    new Date(1136461620000),
    new Date(1139009220000),
    new Date(1141579740000),
    new Date(1144188900000),
    new Date(1146843060000),
    new Date(1149536220000),
    new Date(1152251460000),
    new Date(1154965260000),
    new Date(1157654340000),
    new Date(1160302860000),
    new Date(1162906500000),
    new Date(1165472820000),
    //2007（平成19）
    new Date(1168018800000),
    new Date(1170566280000),
    new Date(1173136680000),
    new Date(1175745900000),
    new Date(1178400000000),
    new Date(1181093220000),
    new Date(1183808520000),
    new Date(1186522260000),
    new Date(1189211340000),
    new Date(1191859920000),
    new Date(1194463440000),
    new Date(1197029640000),
    //2008（平成20）
    new Date(1199575500000),
    new Date(1202122800000),
    new Date(1204693140000),
    new Date(1207302360000),
    new Date(1209956580000),
    new Date(1212649920000),
    new Date(1215365220000),
    new Date(1218078960000),
    new Date(1220768040000),
    new Date(1223416620000),
    new Date(1226020260000),
    new Date(1228586520000),
    //2009（平成21）
    new Date(1231132440000),
    new Date(1233679800000),
    new Date(1236250080000),
    new Date(1238859240000),
    new Date(1241513460000),
    new Date(1244206740000),
    new Date(1246921980000),
    new Date(1249635660000),
    new Date(1252324680000),
    new Date(1254973200000),
    new Date(1257576960000),
    new Date(1260143520000),
    //2010（平成22）
    new Date(1262689740000),
    new Date(1265237280000),
    new Date(1267807560000),
    new Date(1270416600000),
    new Date(1273070640000),
    new Date(1275763740000),
    new Date(1278478920000),
    new Date(1281192540000),
    new Date(1283881500000),
    new Date(1286529960000),
    new Date(1289133720000),
    new Date(1291700280000),
    //2011（平成23）
    new Date(1294246500000),
    new Date(1296793980000),
    new Date(1299364200000),
    new Date(1301973120000),
    new Date(1304626980000),
    new Date(1307320020000),
    new Date(1310035320000),
    new Date(1312749180000),
    new Date(1315438440000),
    new Date(1318087140000),
    new Date(1320690900000),
    new Date(1323257340000),
    //2012（平成24）
    new Date(1325803440000),
    new Date(1328350920000),
    new Date(1330921260000),
    new Date(1333530360000),
    new Date(1336184400000),
    new Date(1338877560000),
    new Date(1341592860000),
    new Date(1344306660000),
    new Date(1346995740000),
    new Date(1349644320000),
    new Date(1352247960000),
    new Date(1354814340000),
    //2013（平成25）
    new Date(1357360440000),
    new Date(1359907980000),
    new Date(1362478500000),
    new Date(1365087720000),
    new Date(1367741880000),
    new Date(1370434980000),
    new Date(1373150100000),
    new Date(1375863600000),
    new Date(1378552560000),
    new Date(1381201140000),
    new Date(1383804840000),
    new Date(1386371340000),
    //2014（平成26）
    new Date(1388917440000),
    new Date(1391464980000),
    new Date(1394035320000),
    new Date(1396644420000),
    new Date(1399298340000),
    new Date(1401991380000),
    new Date(1404706500000),
    new Date(1407420120000),
    new Date(1410109260000),
    new Date(1412758020000),
    new Date(1415362020000),
    new Date(1417928640000),
    //2015（平成27）
    new Date(1420474800000),
    new Date(1423022280000),
    new Date(1425592680000),
    new Date(1428201540000),
    new Date(1430855520000),
    new Date(1433548680000),
    new Date(1436263920000),
    new Date(1438977660000),
    new Date(1441666800000),
    new Date(1444315380000),
    new Date(1446919080000),
    new Date(1449485580000),
    //2016（平成28）
    new Date(1452031680000),
    new Date(1454579160000),
    new Date(1457149380000),
    new Date(1459758420000),
    new Date(1462412520000),
    new Date(1465105680000),
    new Date(1467820980000),
    new Date(1470534780000),
    new Date(1473223860000),
    new Date(1475872560000),
    new Date(1478476080000),
    new Date(1481042460000),
    //2017（平成29）
    new Date(1483588560000),
    new Date(1486136040000),
    new Date(1488706380000),
    new Date(1491315420000),
    new Date(1493969460000),
    new Date(1496662560000),
    new Date(1499377860000),
    new Date(1502091600000),
    new Date(1504780500000),
    new Date(1507429440000),
    new Date(1510033080000),
    new Date(1512599520000),
    //2018（平成30）
    new Date(1515145740000),
    new Date(1517693280000),
    new Date(1520263680000),
    new Date(1522872780000),
    new Date(1525526700000),
    new Date(1528219740000),
    new Date(1530934920000),
    new Date(1533648600000),
    new Date(1536337800000),
    new Date(1538986440000),
    new Date(1541590200000),
    new Date(1544156760000),
    //2019(平成31・令和１)
    new Date(1546702740000),
    new Date(1549250040000),
    new Date(1551820200000),
    new Date(1554429060000),
    new Date(1557082980000),
    new Date(1559775960000),
    new Date(1562491200000),
    new Date(1565205180000),
    new Date(1567894620000),
    new Date(1570543500000),
    new Date(1573147440000),
    new Date(1575713880000),
    //2020（令和２）
    new Date(1578259800000),
    new Date(1580806980000),
    new Date(1583377020000),
    new Date(1585985880000),
    new Date(1588639860000),
    new Date(1591333080000),
    new Date(1594048440000),
    new Date(1596762360000),
    new Date(1599451680000),
    new Date(1602100500000),
    new Date(1604704440000),
    new Date(1607270820000),
    //2021（令和３）
    new Date(1609816920000),
    new Date(1612364340000),
    new Date(1614934320000),
    new Date(1617543300000),
    new Date(1620197220000),
    new Date(1622890320000),
    new Date(1625605500000),
    new Date(1628319240000),
    new Date(1631008380000),
    new Date(1633656960000),
    new Date(1636261020000),
    new Date(1638827760000),
    //2022（令和４）
    new Date(1641373920000),
    new Date(1643921460000),
    new Date(1646491440000),
    new Date(1649100060000),
    new Date(1651753500000),
    new Date(1654446540000),
    new Date(1657161300000),
    new Date(1659875340000),
    new Date(1662564780000),
    new Date(1665213900000),
    new Date(1667818020000),
    new Date(1670384760000),
    //2023（令和5）
    new Date(1672931040000),
    new Date(1675478520000),
    new Date(1678048560000),
    new Date(1678048560000),
    new Date(1683310740000),
    new Date(1686003360000),
    new Date(1688718600000),
    new Date(1691432580000),
    new Date(1694121960000),
    new Date(1696770840000),
    new Date(1699375020000),
    new Date(1701941760000),
    //2024（令和6）
    new Date(1704487740000),
    new Date(1707035220000),
    new Date(1709605380000),
    new Date(1712214060000),
    new Date(1714867800000),
    new Date(1717560600000),
    new Date(1720275600000),
    new Date(1722989340000),
    new Date(1725678600000),
    new Date(1728327780000),
    new Date(1730931600000),
    new Date(1733498220000),
    //2025（令和7）
    new Date(1736044320000),
    new Date(1738591800000),
    new Date(1741162080000),
    new Date(1743771000000),
    new Date(1746424620000),
    new Date(1749117360000),
    new Date(1751832300000),
    new Date(1754545680000),
    new Date(1757235120000),
    new Date(1759884060000),
    new Date(1762488240000),
    new Date(1765055040000),
  ];

  //新年節入り
  var newyear = [
    //T14
    new Date(-1417105380000),
    //S1-S63
    new Date(-1385547660000),
    new Date(-1353990540000),
    new Date(-1322433780000),
    new Date(-1290876660000),
    new Date(-1259320080000),
    new Date(-1227763140000),
    new Date(-1196206200000),
    new Date(-1164649860000),
    new Date(-1133092560000),
    new Date(-1101535860000),
    new Date(-1069979400000),
    new Date(-1038422040000),
    new Date(-1006865100000),
    new Date(-975307740000),
    new Date(-943750320000),
    new Date(-912193800000),
    new Date(-880636260000),
    new Date(-849079140000),
    new Date(-817522560000),
    new Date(-785965200000),
    new Date(-754408560000),
    new Date(-722851740000),
    new Date(-691294620000),
    new Date(-659738160000),
    new Date(-628180740000),
    new Date(-596623560000),
    new Date(-565067160000),
    new Date(-533509980000),
    new Date(-501953340000),
    new Date(-470396520000),
    new Date(-438839220000),
    new Date(-407282700000),
    new Date(-375725400000),
    new Date(-344168220000),
    new Date(-312611820000),
    new Date(-281054220000),
    new Date(-249496920000),
    new Date(-217939920000),
    new Date(-186382500000),
    new Date(-154826040000),
    new Date(-123268920000),
    new Date(-91711740000),
    new Date(-60155520000),
    new Date(-28598460000),
    new Date(2958360000),
    new Date(34514760000),
    new Date(66072000000),
    new Date(97628640000),
    new Date(129186000000),
    new Date(160743540000),
    new Date(192300000000),
    new Date(223857240000),
    new Date(255414420000),
    new Date(286971180000),
    new Date(318528600000),
    new Date(350085360000),
    new Date(381642360000),
    new Date(413199600000),
    new Date(444755940000),
    new Date(476313120000),
    new Date(507870480000),
    new Date(539427120000),
    new Date(570984180000),
    //平成1-30
    new Date(602540820000),
    new Date(634097640000),
    new Date(665654880000),
    new Date(697211280000),
    new Date(728768220000),
    new Date(760325460000),
    new Date(791881980000),
    new Date(823439280000),
    new Date(854996520000),
    new Date(886553820000),
    new Date(918111420000),
    new Date(949668000000),
    new Date(981224940000),
    new Date(1012782240000),
    new Date(1044338700000),
    new Date(1075895760000),
    new Date(1107452580000),
    new Date(1139009220000),
    new Date(1170566280000),
    new Date(1202122800000),
    new Date(1233679800000),
    new Date(1265237280000),
    new Date(1296793980000),
    new Date(1328350920000),
    new Date(1359907980000),
    new Date(1391464980000),
    new Date(1423022280000),
    new Date(1454579160000),
    new Date(1486136040000),
    new Date(1517693280000),
    //令和1-8
    new Date(1549250040000),
    new Date(1580806980000),
    new Date(1612364340000),
    new Date(1643921460000),
    new Date(1675478520000),
    new Date(1707035220000),
    new Date(1738591800000),
    new Date(1770148920000),
  ];

  if (str == "syowa") {
    year = Number(year) + 1925;
  } else if (str == "heisei") {
    year = Number(year) + 1988;
  } else if (str == "reiwa") {
    year = Number(year) + 2018;
  }

  var date = new Date(year, month - 1, day, hour, min);

  for (let i = 0; i < newyear.length; i++) {
    if (newyear[i] <= date.getTime() && date.getTime() < newyear[i + 1]) {
      rekiyear = newyear[i];
      rekiyear = rekiyear.getFullYear();
    }
  }

  let ma1daiun = "";
  let ma2daiun = "";

  for (let i = 0; i < setuiri.length; i++) {
    if (setuiri[i] <= date.getTime() && date.getTime() < setuiri[i + 1]) {
      //大運の計算
      //順行
      if (a == "Ma" && rekiyear == year && Number(year) % 2 == 0) {
        date = new Date(year, month - 1, day, hour, min);

        distDate = setuiri[i + 1];
        var diffMilliSec = distDate - date;
        var diffDays = parseInt(diffMilliSec / 1000 / 60 / 60 / 24);

        ma1daiun = diffDays / 3;
        ma1daiun = Math.floor(ma1daiun);
        output = ma1daiun;
        msgdaiun.innerText = output;
        output = ma1daiun + 10;
        msgdaiun1.innerText = output;
        output = ma1daiun + 20;
        msgdaiun2.innerText = output;
        output = ma1daiun + 30;
        msgdaiun3.innerText = output;
        output = ma1daiun + 40;
        msgdaiun4.innerText = output;
        output = ma1daiun + 50;
        msgdaiun5.innerText = output;
        output = ma1daiun + 60;
        msgdaiun6.innerText = output;
      } else if (a == "Ma" && rekiyear != year && Number(year) % 2 == 1) {
        date = new Date(year, month - 1, day, hour, min);
        distDate = setuiri[i + 1];
        var diffMilliSec = distDate - date;
        var diffDays = parseInt(diffMilliSec / 1000 / 60 / 60 / 24);
        ma1daiun = diffDays / 3;
        ma1daiun = Math.floor(ma1daiun);
        output = ma1daiun;

        msgdaiun.innerText = output;
        output = ma1daiun + 10;
        msgdaiun1.innerText = output;
        output = ma1daiun + 20;
        msgdaiun2.innerText = output;
        output = ma1daiun + 30;
        msgdaiun3.innerText = output;
        output = ma1daiun + 40;
        msgdaiun4.innerText = output;
        output = ma1daiun + 50;
        msgdaiun5.innerText = output;
        output = ma1daiun + 60;
        msgdaiun6.innerText = output;
      } else if (a == "Fe" && rekiyear == year && Number(year) % 2 == 1) {
        date = new Date(year, month - 1, day, hour, min);

        distDate = setuiri[i + 1];
        var diffMilliSec = distDate - date;
        var diffDays = parseInt(diffMilliSec / 1000 / 60 / 60 / 24);
        ma1daiun = diffDays / 3;
        ma1daiun = Math.floor(ma1daiun);
        output = ma1daiun;

        msgdaiun.innerText = output;
        output = ma1daiun + 10;
        msgdaiun1.innerText = output;
        output = ma1daiun + 20;
        msgdaiun2.innerText = output;
        output = ma1daiun + 30;
        msgdaiun3.innerText = output;
        output = ma1daiun + 40;
        msgdaiun4.innerText = output;
        output = ma1daiun + 50;
        msgdaiun5.innerText = output;
        output = ma1daiun + 60;
        msgdaiun6.innerText = output;
      } else if (a == "Fe" && rekiyear != year && Number(year) % 2 == 0) {
        date = new Date(year, month - 1, day, hour, min);

        distDate = setuiri[i + 1];
        var diffMilliSec = distDate - date;
        var diffDays = parseInt(diffMilliSec / 1000 / 60 / 60 / 24);
        ma1daiun = diffDays / 3;
        ma1daiun = Math.floor(ma1daiun);
        output = ma1daiun;

        msgdaiun.innerText = output;
        output = ma1daiun + 10;
        msgdaiun1.innerText = output;
        output = ma1daiun + 20;
        msgdaiun2.innerText = output;
        output = ma1daiun + 30;
        msgdaiun3.innerText = output;
        output = ma1daiun + 40;
        msgdaiun4.innerText = output;
        output = ma1daiun + 50;
        msgdaiun5.innerText = output;
        output = ma1daiun + 60;
        msgdaiun6.innerText = output;
      }
      //逆行運
      else if (a == "Ma" && rekiyear == year && Number(year) % 2 == 1) {
        date = new Date(year, month - 1, day, hour, min);
        distDate = date;
        var diffMilliSec = date - setuiri[i];
        var diffDays = parseInt(diffMilliSec / 1000 / 60 / 60 / 24);
        ma2daiun = diffDays / 3;
        ma2daiun = Math.floor(ma2daiun);
        output = ma2daiun;

        msgdaiun.innerText = output;
        output = ma2daiun + 10;
        msgdaiun1.innerText = output;
        output = ma2daiun + 20;
        msgdaiun2.innerText = output;
        output = ma2daiun + 30;
        msgdaiun3.innerText = output;
        output = ma2daiun + 40;
        msgdaiun4.innerText = output;
        output = ma2daiun + 50;
        msgdaiun5.innerText = output;
        output = ma2daiun + 60;
        msgdaiun6.innerText = output;
      } else if (a == "Ma" && rekiyear != year && Number(year) % 2 == 0) {
        date = new Date(year, month - 1, day, hour, min);
        distDate = date;
        var diffMilliSec = date - setuiri[i];
        var diffDays = parseInt(diffMilliSec / 1000 / 60 / 60 / 24);
        ma2daiun = diffDays / 3;
        ma2daiun = Math.floor(ma2daiun);
        output = ma2daiun;

        msgdaiun.innerText = output;
        output = ma2daiun + 10;
        msgdaiun1.innerText = output;
        output = ma2daiun + 20;
        msgdaiun2.innerText = output;
        output = ma2daiun + 30;
        msgdaiun3.innerText = output;
        output = ma2daiun + 40;
        msgdaiun4.innerText = output;
        output = ma2daiun + 50;
        msgdaiun5.innerText = output;
        output = ma2daiun + 60;
        msgdaiun6.innerText = output;
      } else if (a == "Fe" && rekiyear == year && Number(year) % 2 == 0) {
        date = new Date(year, month - 1, day, hour, min);
        distDate = date;
        var diffMilliSec = date - setuiri[i];
        var diffDays = parseInt(diffMilliSec / 1000 / 60 / 60 / 24);

        ma2daiun = diffDays / 3;
        ma2daiun = Math.floor(ma2daiun);
        output = ma2daiun;

        msgdaiun.innerText = output;
        output = ma2daiun + 10;
        msgdaiun1.innerText = output;
        output = ma2daiun + 20;
        msgdaiun2.innerText = output;
        output = ma2daiun + 30;
        msgdaiun3.innerText = output;
        output = ma2daiun + 40;
        msgdaiun4.innerText = output;
        output = ma2daiun + 50;
        msgdaiun5.innerText = output;
        output = ma2daiun + 60;
        msgdaiun6.innerText = output;
      } else if (a == "Fe" && rekiyear != year && Number(year) % 2 == 1) {
        date = new Date(year, month - 1, day, hour, min);
        distDate = date;
        var diffMilliSec = date - setuiri[i];
        var diffDays = parseInt(diffMilliSec / 1000 / 60 / 60 / 24);

        ma2daiun = diffDays / 3;
        ma2daiun = Math.floor(ma2daiun);
        output = ma2daiun;

        msgdaiun.innerText = output;
        output = ma2daiun + 10;
        msgdaiun1.innerText = output;
        output = ma2daiun + 20;
        msgdaiun2.innerText = output;
        output = ma2daiun + 30;
        msgdaiun3.innerText = output;
        output = ma2daiun + 40;
        msgdaiun4.innerText = output;
        output = ma2daiun + 50;
        msgdaiun5.innerText = output;
        output = ma2daiun + 60;
        msgdaiun6.innerText = output;
      }

      setuiri[i] = i;
      //1月生まれで前年になるときの調整
      if (month == 1 && (i + 1) % 12 == 0) {
        year = year - 1;
      }
      //生まれ月
      month = (i + 1) % 12;
      //2月節入り前の年の調整
      if (0 < month && month < 2) {
        year = year - 1;
      }
    }
  }

  //土性支の表示
  //昭和1
  if (
    new Date(-1388095500000) <= date.getTime() &&
    date.getTime() < new Date(-1387102860000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1387102860000) <= date.getTime() &&
    date.getTime() < new Date(-1387058700000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1387058700000) <= date.getTime() &&
    date.getTime() < new Date(-1385547660000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1380364860000) <= date.getTime() &&
    date.getTime() < new Date(-1379328060000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1379328060000) <= date.getTime() &&
    date.getTime() < new Date(-1379263860000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1379263860000) <= date.getTime() &&
    date.getTime() < new Date(-1377708660000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1372298040000) <= date.getTime() &&
    date.getTime() < new Date(-1371261240000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1371261240000) <= date.getTime() &&
    date.getTime() < new Date(-1371140100000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1371140100000) <= date.getTime() &&
    date.getTime() < new Date(-1369584900000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1364250900000) <= date.getTime() &&
    date.getTime() < new Date(-1363214100000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1363214100000) <= date.getTime() &&
    date.getTime() < new Date(-1363204320000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1363204320000) <= date.getTime() &&
    date.getTime() < new Date(-1361649120000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和2
  if (
    new Date(-1356538500000) <= date.getTime() &&
    date.getTime() < new Date(-1355545740000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1355545740000) <= date.getTime() &&
    date.getTime() < new Date(-1355501700000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1355501700000) <= date.getTime() &&
    date.getTime() < new Date(-1353990540000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1348807980000) <= date.getTime() &&
    date.getTime() < new Date(-1347771180000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1347771180000) <= date.getTime() &&
    date.getTime() < new Date(-1347707220000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1347707220000) <= date.getTime() &&
    date.getTime() < new Date(-1346152020000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1340741400000) <= date.getTime() &&
    date.getTime() < new Date(-1339704600000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1339704600000) <= date.getTime() &&
    date.getTime() < new Date(-1339583280000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1339583280000) <= date.getTime() &&
    date.getTime() < new Date(-1338028080000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1332693840000) <= date.getTime() &&
    date.getTime() < new Date(-1331657040000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1331657040000) <= date.getTime() &&
    date.getTime() < new Date(-1331647380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1331647380000) <= date.getTime() &&
    date.getTime() < new Date(-1330092180000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和3
  if (
    new Date(-1324981680000) <= date.getTime() &&
    date.getTime() < new Date(-1323988980000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1323988980000) <= date.getTime() &&
    date.getTime() < new Date(-1323944880000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1323944880000) <= date.getTime() &&
    date.getTime() < new Date(-1322433780000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1317251100000) <= date.getTime() &&
    date.getTime() < new Date(-1316214300000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1316214300000) <= date.getTime() &&
    date.getTime() < new Date(-1316150160000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1316150160000) <= date.getTime() &&
    date.getTime() < new Date(-1314594960000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1309184100000) <= date.getTime() &&
    date.getTime() < new Date(-1308147300000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1308147300000) <= date.getTime() &&
    date.getTime() < new Date(-1308025920000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1308025920000) <= date.getTime() &&
    date.getTime() < new Date(-1306470720000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1301136600000) <= date.getTime() &&
    date.getTime() < new Date(-1300099800000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1300099800000) <= date.getTime() &&
    date.getTime() < new Date(-1300090200000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1300090200000) <= date.getTime() &&
    date.getTime() < new Date(-1298535000000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和4
  if (
    new Date(-1293424620000) <= date.getTime() &&
    date.getTime() < new Date(-1292431860000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1292431860000) <= date.getTime() &&
    date.getTime() < new Date(-1292387820000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1292387820000) <= date.getTime() &&
    date.getTime() < new Date(-1290876660000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1290876660000) <= date.getTime() &&
    date.getTime() < new Date(-1284656880000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1284656880000) <= date.getTime() &&
    date.getTime() < new Date(-1284592740000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1284592740000) <= date.getTime() &&
    date.getTime() < new Date(-1283037540000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1277627280000) <= date.getTime() &&
    date.getTime() < new Date(-1276590480000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1276590480000) <= date.getTime() &&
    date.getTime() < new Date(-1276469460000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1276469460000) <= date.getTime() &&
    date.getTime() < new Date(-1274914260000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1269580320000) <= date.getTime() &&
    date.getTime() < new Date(-1268543520000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1268543520000) <= date.getTime() &&
    date.getTime() < new Date(-1268533920000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1268533920000) <= date.getTime() &&
    date.getTime() < new Date(-1266978720000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和5
  if (
    new Date(-1261868220000) <= date.getTime() &&
    date.getTime() < new Date(-1260875280000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1260875280000) <= date.getTime() &&
    date.getTime() < new Date(-1260831420000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1260831420000) <= date.getTime() &&
    date.getTime() < new Date(-1259320080000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1254136920000) <= date.getTime() &&
    date.getTime() < new Date(-1253100120000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1253100120000) <= date.getTime() &&
    date.getTime() < new Date(-1253035980000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1253035980000) <= date.getTime() &&
    date.getTime() < new Date(-1251480780000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1246070400000) <= date.getTime() &&
    date.getTime() < new Date(-1245033600000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1245033600000) <= date.getTime() &&
    date.getTime() < new Date(-1244912520000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1244912520000) <= date.getTime() &&
    date.getTime() < new Date(-1243357320000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1238023320000) <= date.getTime() &&
    date.getTime() < new Date(-1236986520000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1236986520000) <= date.getTime() &&
    date.getTime() < new Date(-1236976740000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1236976740000) <= date.getTime() &&
    date.getTime() < new Date(-1235421540000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和6
  if (
    new Date(-1230311040000) <= date.getTime() &&
    date.getTime() < new Date(-1229318340000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1229318340000) <= date.getTime() &&
    date.getTime() < new Date(-1229274240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1229274240000) <= date.getTime() &&
    date.getTime() < new Date(-1227763140000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1222580340000) <= date.getTime() &&
    date.getTime() < new Date(-1221543540000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1221543540000) <= date.getTime() &&
    date.getTime() < new Date(-1221479400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1221479400000) <= date.getTime() &&
    date.getTime() < new Date(-1219924200000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1214513640000) <= date.getTime() &&
    date.getTime() < new Date(-1213476840000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1213476840000) <= date.getTime() &&
    date.getTime() < new Date(-1213355700000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1213355700000) <= date.getTime() &&
    date.getTime() < new Date(-1211800500000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1206466380000) <= date.getTime() &&
    date.getTime() < new Date(-1205429580000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1205429580000) <= date.getTime() &&
    date.getTime() < new Date(-1205419800000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1205419800000) <= date.getTime() &&
    date.getTime() < new Date(-1203864600000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和7
  if (
    new Date(-1198754040000) <= date.getTime() &&
    date.getTime() < new Date(-1197761400000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1197761400000) <= date.getTime() &&
    date.getTime() < new Date(-1197717240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1197717240000) <= date.getTime() &&
    date.getTime() < new Date(-1196206200000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1191023580000) <= date.getTime() &&
    date.getTime() < new Date(-1189986780000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1189986780000) <= date.getTime() &&
    date.getTime() < new Date(-1189922700000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1189922700000) <= date.getTime() &&
    date.getTime() < new Date(-1188367500000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1182956820000) <= date.getTime() &&
    date.getTime() < new Date(-1181920020000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1181920020000) <= date.getTime() &&
    date.getTime() < new Date(-1181798880000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1181798880000) <= date.getTime() &&
    date.getTime() < new Date(-1180243680000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1174909800000) <= date.getTime() &&
    date.getTime() < new Date(-1173873000000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1173873000000) <= date.getTime() &&
    date.getTime() < new Date(-1173863400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1173863400000) <= date.getTime() &&
    date.getTime() < new Date(-1172308200000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和8
  if (
    new Date(-1167197760000) <= date.getTime() &&
    date.getTime() < new Date(-1166205000000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1166205000000) <= date.getTime() &&
    date.getTime() < new Date(-1166160960000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1166160960000) <= date.getTime() &&
    date.getTime() < new Date(-1164649800000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1159466940000) <= date.getTime() &&
    date.getTime() < new Date(-1158430140000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1158430140000) <= date.getTime() &&
    date.getTime() < new Date(-1158365880000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1158365880000) <= date.getTime() &&
    date.getTime() < new Date(-1156810680000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1151399700000) <= date.getTime() &&
    date.getTime() < new Date(-1150362900000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1150362900000) <= date.getTime() &&
    date.getTime() < new Date(-1150241640000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1150241640000) <= date.getTime() &&
    date.getTime() < new Date(-1148686440000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1143352560000) <= date.getTime() &&
    date.getTime() < new Date(-1142315760000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1142315760000) <= date.getTime() &&
    date.getTime() < new Date(-1142306160000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1142306160000) <= date.getTime() &&
    date.getTime() < new Date(-1140750960000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和9
  if (
    new Date(-1135640580000) <= date.getTime() &&
    date.getTime() < new Date(-1134647760000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1134647760000) <= date.getTime() &&
    date.getTime() < new Date(-1134603780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1134603780000) <= date.getTime() &&
    date.getTime() < new Date(-1133092560000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1127909760000) <= date.getTime() &&
    date.getTime() < new Date(-1126872960000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1126872960000) <= date.getTime() &&
    date.getTime() < new Date(-1126808940000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1126808940000) <= date.getTime() &&
    date.getTime() < new Date(-1125253740000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1119843300000) <= date.getTime() &&
    date.getTime() < new Date(-1118806500000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1118806500000) <= date.getTime() &&
    date.getTime() < new Date(-1118685360000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1118685360000) <= date.getTime() &&
    date.getTime() < new Date(-1117130160000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1111796040000) <= date.getTime() &&
    date.getTime() < new Date(-1110759240000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1110759240000) <= date.getTime() &&
    date.getTime() < new Date(-1110749580000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1110749580000) <= date.getTime() &&
    date.getTime() < new Date(-1109194380000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和10
  if (
    new Date(-1104083820000) <= date.getTime() &&
    date.getTime() < new Date(-1103091060000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1103091060000) <= date.getTime() &&
    date.getTime() < new Date(-1103047020000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1103047020000) <= date.getTime() &&
    date.getTime() < new Date(-1101535860000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1096353180000) <= date.getTime() &&
    date.getTime() < new Date(-1095316380000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1095316380000) <= date.getTime() &&
    date.getTime() < new Date(-1095252480000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1095252480000) <= date.getTime() &&
    date.getTime() < new Date(-1093697280000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1088286840000) <= date.getTime() &&
    date.getTime() < new Date(-1087250040000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1087250040000) <= date.getTime() &&
    date.getTime() < new Date(-1087128720000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1087128720000) <= date.getTime() &&
    date.getTime() < new Date(-1085573520000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1080239040000) <= date.getTime() &&
    date.getTime() < new Date(-1079202240000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1079202240000) <= date.getTime() &&
    date.getTime() < new Date(-1079192520000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1079192520000) <= date.getTime() &&
    date.getTime() < new Date(-1077637320000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和11
  if (
    new Date(-1072527180000) <= date.getTime() &&
    date.getTime() < new Date(-1071534600000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1071534600000) <= date.getTime() &&
    date.getTime() < new Date(-1071490380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1071490380000) <= date.getTime() &&
    date.getTime() < new Date(-1069979400000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1064796780000) <= date.getTime() &&
    date.getTime() < new Date(-1063759980000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1063759980000) <= date.getTime() &&
    date.getTime() < new Date(-1063695780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1063695780000) <= date.getTime() &&
    date.getTime() < new Date(-1062140580000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1056729660000) <= date.getTime() &&
    date.getTime() < new Date(-1055692860000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1055692860000) <= date.getTime() &&
    date.getTime() < new Date(-1055571360000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1055571360000) <= date.getTime() &&
    date.getTime() < new Date(-1054016160000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1048681620000) <= date.getTime() &&
    date.getTime() < new Date(-1047644820000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1047644820000) <= date.getTime() &&
    date.getTime() < new Date(-1047635100000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1047635100000) <= date.getTime() &&
    date.getTime() < new Date(-1046079900000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和12
  if (
    new Date(-1040969760000) <= date.getTime() &&
    date.getTime() < new Date(-1039977240000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1039977240000) <= date.getTime() &&
    date.getTime() < new Date(-1039932960000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1039932960000) <= date.getTime() &&
    date.getTime() < new Date(-1038422040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1033239480000) <= date.getTime() &&
    date.getTime() < new Date(-1032202680000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1032202680000) <= date.getTime() &&
    date.getTime() < new Date(-1032138540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1032138540000) <= date.getTime() &&
    date.getTime() < new Date(-1030583340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1025172840000) <= date.getTime() &&
    date.getTime() < new Date(-1024136040000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1024136040000) <= date.getTime() &&
    date.getTime() < new Date(-1024014840000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1024014840000) <= date.getTime() &&
    date.getTime() < new Date(-1022459640000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1017125340000) <= date.getTime() &&
    date.getTime() < new Date(-1016088540000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1016088540000) <= date.getTime() &&
    date.getTime() < new Date(-1016078640000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1016078640000) <= date.getTime() &&
    date.getTime() < new Date(-1014523440000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和13
  if (
    new Date(-1009412880000) <= date.getTime() &&
    date.getTime() < new Date(-1008420300000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1008420300000) <= date.getTime() &&
    date.getTime() < new Date(-1008376080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1008376080000) <= date.getTime() &&
    date.getTime() < new Date(-1006865100000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1001682660000) <= date.getTime() &&
    date.getTime() < new Date(-1000645860000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-1000645860000) <= date.getTime() &&
    date.getTime() < new Date(-1000581900000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-1000581900000) <= date.getTime() &&
    date.getTime() < new Date(-999026700000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-993616080000) <= date.getTime() &&
    date.getTime() < new Date(-992579280000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-992579280000) <= date.getTime() &&
    date.getTime() < new Date(-992458020000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-992458020000) <= date.getTime() &&
    date.getTime() < new Date(-990902820000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-985568280000) <= date.getTime() &&
    date.getTime() < new Date(-984531480000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-984531480000) <= date.getTime() &&
    date.getTime() < new Date(-984521460000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-984521460000) <= date.getTime() &&
    date.getTime() < new Date(-982966260000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和14
  if (
    new Date(-977855520000) <= date.getTime() &&
    date.getTime() < new Date(-976862940000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-976862940000) <= date.getTime() &&
    date.getTime() < new Date(-976818720000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-976818720000) <= date.getTime() &&
    date.getTime() < new Date(-975307740000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-970125720000) <= date.getTime() &&
    date.getTime() < new Date(-969088920000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-969088920000) <= date.getTime() &&
    date.getTime() < new Date(-969025140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-969025140000) <= date.getTime() &&
    date.getTime() < new Date(-967469940000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-962059260000) <= date.getTime() &&
    date.getTime() < new Date(-961022460000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-961022460000) <= date.getTime() &&
    date.getTime() < new Date(-960900960000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-960900960000) <= date.getTime() &&
    date.getTime() < new Date(-959345760000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-954010980000) <= date.getTime() &&
    date.getTime() < new Date(-952974180000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-952974180000) <= date.getTime() &&
    date.getTime() < new Date(-952964160000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-952964160000) <= date.getTime() &&
    date.getTime() < new Date(-951408960000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和15
  if (
    new Date(-946298160000) <= date.getTime() &&
    date.getTime() < new Date(-945305520000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-945305520000) <= date.getTime() &&
    date.getTime() < new Date(-945261360000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-945261360000) <= date.getTime() &&
    date.getTime() < new Date(-943750320000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-938568300000) <= date.getTime() &&
    date.getTime() < new Date(-937531500000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-937531500000) <= date.getTime() &&
    date.getTime() < new Date(-937467780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-937467780000) <= date.getTime() &&
    date.getTime() < new Date(-935912580000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-930502320000) <= date.getTime() &&
    date.getTime() < new Date(-929465520000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-929465520000) <= date.getTime() &&
    date.getTime() < new Date(-929344080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-929344080000) <= date.getTime() &&
    date.getTime() < new Date(-927788880000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-922454220000) <= date.getTime() &&
    date.getTime() < new Date(-921417420000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-921417420000) <= date.getTime() &&
    date.getTime() < new Date(-921407580000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-921407580000) <= date.getTime() &&
    date.getTime() < new Date(-919852380000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和16
  if (
    new Date(-914741760000) <= date.getTime() &&
    date.getTime() < new Date(-913749000000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-913749000000) <= date.getTime() &&
    date.getTime() < new Date(-913704960000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-913704960000) <= date.getTime() &&
    date.getTime() < new Date(-912193800000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-907011300000) <= date.getTime() &&
    date.getTime() < new Date(-905974500000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-905974500000) <= date.getTime() &&
    date.getTime() < new Date(-905910600000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-905910600000) <= date.getTime() &&
    date.getTime() < new Date(-904355400000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-898945020000) <= date.getTime() &&
    date.getTime() < new Date(-897908220000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-897908220000) <= date.getTime() &&
    date.getTime() < new Date(-897786840000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-897786840000) <= date.getTime() &&
    date.getTime() < new Date(-896231640000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-890896860000) <= date.getTime() &&
    date.getTime() < new Date(-889860060000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-889860060000) <= date.getTime() &&
    date.getTime() < new Date(-889850100000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-889850100000) <= date.getTime() &&
    date.getTime() < new Date(-888294900000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和17
  if (
    new Date(-883184220000) <= date.getTime() &&
    date.getTime() < new Date(-882191460000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-882191460000) <= date.getTime() &&
    date.getTime() < new Date(-882147420000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-882147420000) <= date.getTime() &&
    date.getTime() < new Date(-880636260000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-875453760000) <= date.getTime() &&
    date.getTime() < new Date(-874416960000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-874416960000) <= date.getTime() &&
    date.getTime() < new Date(-874353180000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-874353180000) <= date.getTime() &&
    date.getTime() < new Date(-872797980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-867388080000) <= date.getTime() &&
    date.getTime() < new Date(-866351280000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-866351280000) <= date.getTime() &&
    date.getTime() < new Date(-866230140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-866230140000) <= date.getTime() &&
    date.getTime() < new Date(-864674940000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-859340280000) <= date.getTime() &&
    date.getTime() < new Date(-858303480000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-858303480000) <= date.getTime() &&
    date.getTime() < new Date(-858293280000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-858293280000) <= date.getTime() &&
    date.getTime() < new Date(-856738080000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和18
  if (
    new Date(-851627100000) <= date.getTime() &&
    date.getTime() < new Date(-850634340000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-850634340000) <= date.getTime() &&
    date.getTime() < new Date(-850590300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-850590300000) <= date.getTime() &&
    date.getTime() < new Date(-849079140000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-843896880000) <= date.getTime() &&
    date.getTime() < new Date(-842860080000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-842860080000) <= date.getTime() &&
    date.getTime() < new Date(-842796360000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-842796360000) <= date.getTime() &&
    date.getTime() < new Date(-841241160000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-835831260000) <= date.getTime() &&
    date.getTime() < new Date(-834794460000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-834794460000) <= date.getTime() &&
    date.getTime() < new Date(-834673260000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-834673260000) <= date.getTime() &&
    date.getTime() < new Date(-833118060000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-827783340000) <= date.getTime() &&
    date.getTime() < new Date(-826746540000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-826746540000) <= date.getTime() &&
    date.getTime() < new Date(-826736460000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-826736460000) <= date.getTime() &&
    date.getTime() < new Date(-825181260000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }

  //昭和19
  if (
    new Date(-820070400000) <= date.getTime() &&
    date.getTime() < new Date(-819077820000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-819077820000) <= date.getTime() &&
    date.getTime() < new Date(-819033600000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-819033600000) <= date.getTime() &&
    date.getTime() < new Date(-817522620000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-812340360000) <= date.getTime() &&
    date.getTime() < new Date(-811303560000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-811303560000) <= date.getTime() &&
    date.getTime() < new Date(-811239600000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-811239600000) <= date.getTime() &&
    date.getTime() < new Date(-809684400000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-804273840000) <= date.getTime() &&
    date.getTime() < new Date(-803237040000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-803237040000) <= date.getTime() &&
    date.getTime() < new Date(-803115660000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-803115660000) <= date.getTime() &&
    date.getTime() < new Date(-801560460000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-796225860000) <= date.getTime() &&
    date.getTime() < new Date(-795189060000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-795189060000) <= date.getTime() &&
    date.getTime() < new Date(-795179100000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-795179100000) <= date.getTime() &&
    date.getTime() < new Date(-793623900000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和20
  if (
    new Date(-788513100000) <= date.getTime() &&
    date.getTime() < new Date(-787520400000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-787520400000) <= date.getTime() &&
    date.getTime() < new Date(-787476300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-787476300000) <= date.getTime() &&
    date.getTime() < new Date(-785965200000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-780782880000) <= date.getTime() &&
    date.getTime() < new Date(-779746080000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-779746080000) <= date.getTime() &&
    date.getTime() < new Date(-779682180000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-779682180000) <= date.getTime() &&
    date.getTime() < new Date(-778126980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-772716780000) <= date.getTime() &&
    date.getTime() < new Date(-771679980000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-771679980000) <= date.getTime() &&
    date.getTime() < new Date(-771558840000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-771558840000) <= date.getTime() &&
    date.getTime() < new Date(-770003640000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-764669400000) <= date.getTime() &&
    date.getTime() < new Date(-763632600000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-763632600000) <= date.getTime() &&
    date.getTime() < new Date(-763622700000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-763622700000) <= date.getTime() &&
    date.getTime() < new Date(-762067500000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和21
  if (
    new Date(-756956580000) <= date.getTime() &&
    date.getTime() < new Date(-755963760000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-755963760000) <= date.getTime() &&
    date.getTime() < new Date(-755919780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-755919780000) <= date.getTime() &&
    date.getTime() < new Date(-754408560000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-749226060000) <= date.getTime() &&
    date.getTime() < new Date(-748189260000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-748189260000) <= date.getTime() &&
    date.getTime() < new Date(-748125480000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-748125480000) <= date.getTime() &&
    date.getTime() < new Date(-746570280000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-741160140000) <= date.getTime() &&
    date.getTime() < new Date(-740123340000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-740123340000) <= date.getTime() &&
    date.getTime() < new Date(-740002080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-740002080000) <= date.getTime() &&
    date.getTime() < new Date(-738446880000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-733112340000) <= date.getTime() &&
    date.getTime() < new Date(-732075540000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-732075540000) <= date.getTime() &&
    date.getTime() < new Date(-732065520000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-732065520000) <= date.getTime() &&
    date.getTime() < new Date(-730510320000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和22
  if (
    new Date(-725399580000) <= date.getTime() &&
    date.getTime() < new Date(-724406940000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-724406940000) <= date.getTime() &&
    date.getTime() < new Date(-724362780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-724362780000) <= date.getTime() &&
    date.getTime() < new Date(-722851740000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-717669540000) <= date.getTime() &&
    date.getTime() < new Date(-716632740000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-716632740000) <= date.getTime() &&
    date.getTime() < new Date(-716569020000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-716569020000) <= date.getTime() &&
    date.getTime() < new Date(-715013820000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-709603440000) <= date.getTime() &&
    date.getTime() < new Date(-708566640000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-708566640000) <= date.getTime() &&
    date.getTime() < new Date(-708445140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-708445140000) <= date.getTime() &&
    date.getTime() < new Date(-706889940000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-701554920000) <= date.getTime() &&
    date.getTime() < new Date(-700518120000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-700518120000) <= date.getTime() &&
    date.getTime() < new Date(-700508100000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-700508100000) <= date.getTime() &&
    date.getTime() < new Date(-698952900000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和23
  if (
    new Date(-693842340000) <= date.getTime() &&
    date.getTime() < new Date(-692849820000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-692849820000) <= date.getTime() &&
    date.getTime() < new Date(-692805540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-692805540000) <= date.getTime() &&
    date.getTime() < new Date(-691294620000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-686112600000) <= date.getTime() &&
    date.getTime() < new Date(-685075800000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-685075800000) <= date.getTime() &&
    date.getTime() < new Date(-685012020000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-685012020000) <= date.getTime() &&
    date.getTime() < new Date(-683460420000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-678050160000) <= date.getTime() &&
    date.getTime() < new Date(-677013360000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-677013360000) <= date.getTime() &&
    date.getTime() < new Date(-676891980000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-676891980000) <= date.getTime() &&
    date.getTime() < new Date(-675336780000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-669998340000) <= date.getTime() &&
    date.getTime() < new Date(-668961540000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-668961540000) <= date.getTime() &&
    date.getTime() < new Date(-668951580000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-668951580000) <= date.getTime() &&
    date.getTime() < new Date(-667396380000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和24
  if (
    new Date(-662285880000) <= date.getTime() &&
    date.getTime() < new Date(-661293360000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-661293360000) <= date.getTime() &&
    date.getTime() < new Date(-661249080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-661249080000) <= date.getTime() &&
    date.getTime() < new Date(-659738160000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-654559680000) <= date.getTime() &&
    date.getTime() < new Date(-653522880000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-653522880000) <= date.getTime() &&
    date.getTime() < new Date(-653458980000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-653458980000) <= date.getTime() &&
    date.getTime() < new Date(-651903780000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-646493280000) <= date.getTime() &&
    date.getTime() < new Date(-645456480000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-645456480000) <= date.getTime() &&
    date.getTime() < new Date(-645335040000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-645335040000) <= date.getTime() &&
    date.getTime() < new Date(-643779840000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-638441280000) <= date.getTime() &&
    date.getTime() < new Date(-637404480000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-637404480000) <= date.getTime() &&
    date.getTime() < new Date(-637394340000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-637394340000) <= date.getTime() &&
    date.getTime() < new Date(-635839140000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和25
  if (
    new Date(-630728460000) <= date.getTime() &&
    date.getTime() < new Date(-629735940000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-629735940000) <= date.getTime() &&
    date.getTime() < new Date(-629691660000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-629691660000) <= date.getTime() &&
    date.getTime() < new Date(-628180740000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-622998900000) <= date.getTime() &&
    date.getTime() < new Date(-621962100000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-621962100000) <= date.getTime() &&
    date.getTime() < new Date(-621898500000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-621898500000) <= date.getTime() &&
    date.getTime() < new Date(-620343300000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-614936760000) <= date.getTime() &&
    date.getTime() < new Date(-613899960000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-613899960000) <= date.getTime() &&
    date.getTime() < new Date(-613778640000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-613778640000) <= date.getTime() &&
    date.getTime() < new Date(-612223440000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-606884880000) <= date.getTime() &&
    date.getTime() < new Date(-605848080000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-605848080000) <= date.getTime() &&
    date.getTime() < new Date(-605837760000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-605837760000) <= date.getTime() &&
    date.getTime() < new Date(-604282560000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和26
  if (
    new Date(-599171340000) <= date.getTime() &&
    date.getTime() < new Date(-598178760000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-598178760000) <= date.getTime() &&
    date.getTime() < new Date(-598134540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-598134540000) <= date.getTime() &&
    date.getTime() < new Date(-596623560000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-591442020000) <= date.getTime() &&
    date.getTime() < new Date(-590405220000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-590405220000) <= date.getTime() &&
    date.getTime() < new Date(-590341800000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-590341800000) <= date.getTime() &&
    date.getTime() < new Date(-588790200000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-583380360000) <= date.getTime() &&
    date.getTime() < new Date(-582343560000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-582343560000) <= date.getTime() &&
    date.getTime() < new Date(-582222120000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-582222120000) <= date.getTime() &&
    date.getTime() < new Date(-580666920000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-575328180000) <= date.getTime() &&
    date.getTime() < new Date(-574291380000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-574291380000) <= date.getTime() &&
    date.getTime() < new Date(-574281180000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-574281180000) <= date.getTime() &&
    date.getTime() < new Date(-572725980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和27
  if (
    new Date(-567615000000) <= date.getTime() &&
    date.getTime() < new Date(-566622360000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-566622360000) <= date.getTime() &&
    date.getTime() < new Date(-566578200000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-566578200000) <= date.getTime() &&
    date.getTime() < new Date(-565067160000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-559885440000) <= date.getTime() &&
    date.getTime() < new Date(-558848640000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-558848640000) <= date.getTime() &&
    date.getTime() < new Date(-558785160000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-558785160000) <= date.getTime() &&
    date.getTime() < new Date(-557229960000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-551819700000) <= date.getTime() &&
    date.getTime() < new Date(-550782900000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-550782900000) <= date.getTime() &&
    date.getTime() < new Date(-550661280000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-550661280000) <= date.getTime() &&
    date.getTime() < new Date(-549106080000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-543770820000) <= date.getTime() &&
    date.getTime() < new Date(-542734020000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-542734020000) <= date.getTime() &&
    date.getTime() < new Date(-542723880000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-542723880000) <= date.getTime() &&
    date.getTime() < new Date(-541168680000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和28
  if (
    new Date(-536057820000) <= date.getTime() &&
    date.getTime() < new Date(-535065180000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-535065180000) <= date.getTime() &&
    date.getTime() < new Date(-535021020000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-535021020000) <= date.getTime() &&
    date.getTime() < new Date(-533509980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-528328020000) <= date.getTime() &&
    date.getTime() < new Date(-527291220000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-527291220000) <= date.getTime() &&
    date.getTime() < new Date(-527227620000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-527227620000) <= date.getTime() &&
    date.getTime() < new Date(-525672420000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-520262700000) <= date.getTime() &&
    date.getTime() < new Date(-519225900000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-519225900000) <= date.getTime() &&
    date.getTime() < new Date(-519104700000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-519104700000) <= date.getTime() &&
    date.getTime() < new Date(-520227900000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-512214540000) <= date.getTime() &&
    date.getTime() < new Date(-511177740000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-511177740000) <= date.getTime() &&
    date.getTime() < new Date(-511167480000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-511167480000) <= date.getTime() &&
    date.getTime() < new Date(-509612280000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和29
  if (
    new Date(-504501240000) <= date.getTime() &&
    date.getTime() < new Date(-503508540000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-503508540000) <= date.getTime() &&
    date.getTime() < new Date(-503464440000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-503464440000) <= date.getTime() &&
    date.getTime() < new Date(-501953340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-496771200000) <= date.getTime() &&
    date.getTime() < new Date(-495734400000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-495734400000) <= date.getTime() &&
    date.getTime() < new Date(-495670860000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-495670860000) <= date.getTime() &&
    date.getTime() < new Date(-494115660000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-488706000000) <= date.getTime() &&
    date.getTime() < new Date(-487669200000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-487669200000) <= date.getTime() &&
    date.getTime() < new Date(-487548000000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-487548000000) <= date.getTime() &&
    date.getTime() < new Date(-485992800000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-480657720000) <= date.getTime() &&
    date.getTime() < new Date(-479620920000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-479620920000) <= date.getTime() &&
    date.getTime() < new Date(-479610540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-479610540000) <= date.getTime() &&
    date.getTime() < new Date(-478055340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和30
  if (
    new Date(-472944180000) <= date.getTime() &&
    date.getTime() < new Date(-471951720000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-471951720000) <= date.getTime() &&
    date.getTime() < new Date(-471907380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-471907380000) <= date.getTime() &&
    date.getTime() < new Date(-470396520000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-465214860000) <= date.getTime() &&
    date.getTime() < new Date(-464178060000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-464178060000) <= date.getTime() &&
    date.getTime() < new Date(-464114520000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-464114520000) <= date.getTime() &&
    date.getTime() < new Date(-462559320000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-457149240000) <= date.getTime() &&
    date.getTime() < new Date(-456112440000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-456112440000) <= date.getTime() &&
    date.getTime() < new Date(-455990940000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-455990940000) <= date.getTime() &&
    date.getTime() < new Date(-454435740000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-449100420000) <= date.getTime() &&
    date.getTime() < new Date(-448063620000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-448063620000) <= date.getTime() &&
    date.getTime() < new Date(-448053240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-448053240000) <= date.getTime() &&
    date.getTime() < new Date(-446498040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和31
  if (
    new Date(-441386940000) <= date.getTime() &&
    date.getTime() < new Date(-440394420000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-440394420000) <= date.getTime() &&
    date.getTime() < new Date(-440350140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-440350140000) <= date.getTime() &&
    date.getTime() < new Date(-438839220000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-433657680000) <= date.getTime() &&
    date.getTime() < new Date(-432620880000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-432620880000) <= date.getTime() &&
    date.getTime() < new Date(-432557400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-432557400000) <= date.getTime() &&
    date.getTime() < new Date(-431002200000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-425592060000) <= date.getTime() &&
    date.getTime() < new Date(-424555260000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-424555260000) <= date.getTime() &&
    date.getTime() < new Date(-424433940000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-424433940000) <= date.getTime() &&
    date.getTime() < new Date(-422878740000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-417543780000) <= date.getTime() &&
    date.getTime() < new Date(-416506980000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-416506980000) <= date.getTime() &&
    date.getTime() < new Date(-416496780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-416496780000) <= date.getTime() &&
    date.getTime() < new Date(-414941580000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和32
  if (
    new Date(-409830540000) <= date.getTime() &&
    date.getTime() < new Date(-408837900000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-408837900000) <= date.getTime() &&
    date.getTime() < new Date(-408793740000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-408793740000) <= date.getTime() &&
    date.getTime() < new Date(-407282700000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-402100860000) <= date.getTime() &&
    date.getTime() < new Date(-401064060000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-401064060000) <= date.getTime() &&
    date.getTime() < new Date(-401000460000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-401000460000) <= date.getTime() &&
    date.getTime() < new Date(-399445260000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-394035060000) <= date.getTime() &&
    date.getTime() < new Date(-392998260000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-392998260000) <= date.getTime() &&
    date.getTime() < new Date(-392876820000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-392876820000) <= date.getTime() &&
    date.getTime() < new Date(-391321620000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-385986540000) <= date.getTime() &&
    date.getTime() < new Date(-384949740000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-384949740000) <= date.getTime() &&
    date.getTime() < new Date(-384939540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-384939540000) <= date.getTime() &&
    date.getTime() < new Date(-383384340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和33
  if (
    new Date(-378273300000) <= date.getTime() &&
    date.getTime() < new Date(-377280600000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-377280600000) <= date.getTime() &&
    date.getTime() < new Date(-377236500000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-377236500000) <= date.getTime() &&
    date.getTime() < new Date(-375725400000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-370543620000) <= date.getTime() &&
    date.getTime() < new Date(-369506820000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-369506820000) <= date.getTime() &&
    date.getTime() < new Date(-369443400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-369443400000) <= date.getTime() &&
    date.getTime() < new Date(-367888200000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-362478360000) <= date.getTime() &&
    date.getTime() < new Date(-361441560000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-361441560000) <= date.getTime() &&
    date.getTime() < new Date(-361320120000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-361320120000) <= date.getTime() &&
    date.getTime() < new Date(-359764920000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-354429600000) <= date.getTime() &&
    date.getTime() < new Date(-353392800000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-353392800000) <= date.getTime() &&
    date.getTime() < new Date(-353382420000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-353382420000) <= date.getTime() &&
    date.getTime() < new Date(-351827220000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和34
  if (
    new Date(-346716060000) <= date.getTime() &&
    date.getTime() < new Date(-345723420000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-345723420000) <= date.getTime() &&
    date.getTime() < new Date(-345679260000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-345679260000) <= date.getTime() &&
    date.getTime() < new Date(-344168220000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-338986560000) <= date.getTime() &&
    date.getTime() < new Date(-337949760000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-337949760000) <= date.getTime() &&
    date.getTime() < new Date(-337886460000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-337886460000) <= date.getTime() &&
    date.getTime() < new Date(-336331260000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-330921600000) <= date.getTime() &&
    date.getTime() < new Date(-329884800000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-329884800000) <= date.getTime() &&
    date.getTime() < new Date(-329763300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-329763300000) <= date.getTime() &&
    date.getTime() < new Date(-328208100000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-322872540000) <= date.getTime() &&
    date.getTime() < new Date(-321835740000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-321835740000) <= date.getTime() &&
    date.getTime() < new Date(-321825420000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-321825420000) <= date.getTime() &&
    date.getTime() < new Date(-320270220000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和35
  if (
    new Date(-315159120000) <= date.getTime() &&
    date.getTime() < new Date(-314167020000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-314167020000) <= date.getTime() &&
    date.getTime() < new Date(-314122320000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-314122320000) <= date.getTime() &&
    date.getTime() < new Date(-312611820000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-307430160000) <= date.getTime() &&
    date.getTime() < new Date(-306393360000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-306393360000) <= date.getTime() &&
    date.getTime() < new Date(-306329820000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-306329820000) <= date.getTime() &&
    date.getTime() < new Date(-304774620000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-299364420000) <= date.getTime() &&
    date.getTime() < new Date(-298327620000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-298327620000) <= date.getTime() &&
    date.getTime() < new Date(-298206000000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-298206000000) <= date.getTime() &&
    date.getTime() < new Date(-296650800000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-291315060000) <= date.getTime() &&
    date.getTime() < new Date(-290278260000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-290278260000) <= date.getTime() &&
    date.getTime() < new Date(-290267880000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-290267880000) <= date.getTime() &&
    date.getTime() < new Date(-288712680000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和36
  if (
    new Date(-283601820000) <= date.getTime() &&
    date.getTime() < new Date(-282609420000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-282609420000) <= date.getTime() &&
    date.getTime() < new Date(-282565020000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-282565020000) <= date.getTime() &&
    date.getTime() < new Date(-281054220000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-275872680000) <= date.getTime() &&
    date.getTime() < new Date(-274835880000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-274835880000) <= date.getTime() &&
    date.getTime() < new Date(-274772340000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-274772340000) <= date.getTime() &&
    date.getTime() < new Date(-273217140000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-267807180000) <= date.getTime() &&
    date.getTime() < new Date(-266770380000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-266770380000) <= date.getTime() &&
    date.getTime() < new Date(-266649120000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-266649120000) <= date.getTime() &&
    date.getTime() < new Date(-265093920000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-259758540000) <= date.getTime() &&
    date.getTime() < new Date(-258721740000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-258721740000) <= date.getTime() &&
    date.getTime() < new Date(-258711240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-258711240000) <= date.getTime() &&
    date.getTime() < new Date(-257156040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和37
  if (
    new Date(-252044700000) <= date.getTime() &&
    date.getTime() < new Date(-251052120000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-251052120000) <= date.getTime() &&
    date.getTime() < new Date(-251007900000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-251007900000) <= date.getTime() &&
    date.getTime() < new Date(-249496920000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-244315560000) <= date.getTime() &&
    date.getTime() < new Date(-243278760000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-243278760000) <= date.getTime() &&
    date.getTime() < new Date(-243215460000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-243215460000) <= date.getTime() &&
    date.getTime() < new Date(-241660260000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-236250540000) <= date.getTime() &&
    date.getTime() < new Date(-235213740000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-235213740000) <= date.getTime() &&
    date.getTime() < new Date(-235092360000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-235092360000) <= date.getTime() &&
    date.getTime() < new Date(-233537160000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-228201720000) <= date.getTime() &&
    date.getTime() < new Date(-227164920000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-227164920000) <= date.getTime() &&
    date.getTime() < new Date(-227154300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-227154300000) <= date.getTime() &&
    date.getTime() < new Date(-225599100000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和38
  if (
    new Date(-220487580000) <= date.getTime() &&
    date.getTime() < new Date(-219495120000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-219495120000) <= date.getTime() &&
    date.getTime() < new Date(-219408720000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-219408720000) <= date.getTime() &&
    date.getTime() < new Date(-217939920000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-212758860000) <= date.getTime() &&
    date.getTime() < new Date(-211722060000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-211722060000) <= date.getTime() &&
    date.getTime() < new Date(-211658880000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-211658880000) <= date.getTime() &&
    date.getTime() < new Date(-210103680000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-204693720000) <= date.getTime() &&
    date.getTime() < new Date(-203656920000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-203656920000) <= date.getTime() &&
    date.getTime() < new Date(-203535240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-203535240000) <= date.getTime() &&
    date.getTime() < new Date(-201980040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-196644240000) <= date.getTime() &&
    date.getTime() < new Date(-195607440000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-195607440000) <= date.getTime() &&
    date.getTime() < new Date(-195596820000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-195596820000) <= date.getTime() &&
    date.getTime() < new Date(-194041620000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和39
  if (
    new Date(-188930220000) <= date.getTime() &&
    date.getTime() < new Date(-187937700000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-187937700000) <= date.getTime() &&
    date.getTime() < new Date(-187893420000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-187893420000) <= date.getTime() &&
    date.getTime() < new Date(-186382500000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-181201320000) <= date.getTime() &&
    date.getTime() < new Date(-180164520000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-180164520000) <= date.getTime() &&
    date.getTime() < new Date(-180101340000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-180101340000) <= date.getTime() &&
    date.getTime() < new Date(-178546140000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-173136480000) <= date.getTime() &&
    date.getTime() < new Date(-172099680000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-172099680000) <= date.getTime() &&
    date.getTime() < new Date(-171978240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-171978240000) <= date.getTime() &&
    date.getTime() < new Date(-170423040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-165087480000) <= date.getTime() &&
    date.getTime() < new Date(-164050680000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-164050680000) <= date.getTime() &&
    date.getTime() < new Date(-164040300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-164040300000) <= date.getTime() &&
    date.getTime() < new Date(-162485100000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和40
  if (
    new Date(-157373880000) <= date.getTime() &&
    date.getTime() < new Date(-156381240000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-156381240000) <= date.getTime() &&
    date.getTime() < new Date(-156337080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-156337080000) <= date.getTime() &&
    date.getTime() < new Date(-154826040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-149644380000) <= date.getTime() &&
    date.getTime() < new Date(-148607580000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-148607580000) <= date.getTime() &&
    date.getTime() < new Date(-148544280000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-148544280000) <= date.getTime() &&
    date.getTime() < new Date(-146989080000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-141579540000) <= date.getTime() &&
    date.getTime() < new Date(-140542740000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-140542740000) <= date.getTime() &&
    date.getTime() < new Date(-140421300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-140421300000) <= date.getTime() &&
    date.getTime() < new Date(-138866100000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-133530540000) <= date.getTime() &&
    date.getTime() < new Date(-132493740000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-132493740000) <= date.getTime() &&
    date.getTime() < new Date(-132483180000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-132483180000) <= date.getTime() &&
    date.getTime() < new Date(-130927980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和41
  if (
    new Date(-125816700000) <= date.getTime() &&
    date.getTime() < new Date(-124824120000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-124824120000) <= date.getTime() &&
    date.getTime() < new Date(-124779900000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-124779900000) <= date.getTime() &&
    date.getTime() < new Date(-123268920000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-118087380000) <= date.getTime() &&
    date.getTime() < new Date(-117050580000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-117050580000) <= date.getTime() &&
    date.getTime() < new Date(-116987400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-116987400000) <= date.getTime() &&
    date.getTime() < new Date(-115432200000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-110022780000) <= date.getTime() &&
    date.getTime() < new Date(-108985980000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-108985980000) <= date.getTime() &&
    date.getTime() < new Date(-108864660000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-108864660000) <= date.getTime() &&
    date.getTime() < new Date(-107309460000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-101973780000) <= date.getTime() &&
    date.getTime() < new Date(-100936980000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-100936980000) <= date.getTime() &&
    date.getTime() < new Date(-100926240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-100926240000) <= date.getTime() &&
    date.getTime() < new Date(-99371040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和42
  if (
    new Date(-94259460000) <= date.getTime() &&
    date.getTime() < new Date(-93266940000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-93266940000) <= date.getTime() &&
    date.getTime() < new Date(-93222660000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-93222660000) <= date.getTime() &&
    date.getTime() < new Date(-91711740000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-86530500000) <= date.getTime() &&
    date.getTime() < new Date(-85493700000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-85493700000) <= date.getTime() &&
    date.getTime() < new Date(-85430580000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-85430580000) <= date.getTime() &&
    date.getTime() < new Date(-83875380000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-78466020000) <= date.getTime() &&
    date.getTime() < new Date(-77429220000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-77429220000) <= date.getTime() &&
    date.getTime() < new Date(-77307900000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-77307900000) <= date.getTime() &&
    date.getTime() < new Date(-75752700000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-70417140000) <= date.getTime() &&
    date.getTime() < new Date(-69380340000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-69380340000) <= date.getTime() &&
    date.getTime() < new Date(-69369720000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-69369720000) <= date.getTime() &&
    date.getTime() < new Date(-67814520000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和43
  if (
    new Date(-62703180000) <= date.getTime() &&
    date.getTime() < new Date(-61710720000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-61710720000) <= date.getTime() &&
    date.getTime() < new Date(-61666380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-61666380000) <= date.getTime() &&
    date.getTime() < new Date(-60155520000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-54974340000) <= date.getTime() &&
    date.getTime() < new Date(-53937540000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-53937540000) <= date.getTime() &&
    date.getTime() < new Date(-53874240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-53874240000) <= date.getTime() &&
    date.getTime() < new Date(-52319040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-46909080000) <= date.getTime() &&
    date.getTime() < new Date(-45872280000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-45872280000) <= date.getTime() &&
    date.getTime() < new Date(-45750780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-45750780000) <= date.getTime() &&
    date.getTime() < new Date(-44195580000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-38859900000) <= date.getTime() &&
    date.getTime() < new Date(-37823100000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-37823100000) <= date.getTime() &&
    date.getTime() < new Date(-37812600000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-37812600000) <= date.getTime() &&
    date.getTime() < new Date(-36257400000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和44
  if (
    new Date(-31146180000) <= date.getTime() &&
    date.getTime() < new Date(-30153660000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-30153660000) <= date.getTime() &&
    date.getTime() < new Date(-30109380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-30109380000) <= date.getTime() &&
    date.getTime() < new Date(-28598460000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-23417100000) <= date.getTime() &&
    date.getTime() < new Date(-22380300000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-22380300000) <= date.getTime() &&
    date.getTime() < new Date(-22317000000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-22317000000) <= date.getTime() &&
    date.getTime() < new Date(-20761800000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-15352080000) <= date.getTime() &&
    date.getTime() < new Date(-14315280000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-14315280000) <= date.getTime() &&
    date.getTime() < new Date(-14193960000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-14193960000) <= date.getTime() &&
    date.getTime() < new Date(-12638760000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-7303380000) <= date.getTime() &&
    date.getTime() < new Date(-6266580000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(-6266580000) <= date.getTime() &&
    date.getTime() < new Date(-6256080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(-6256080000) <= date.getTime() &&
    date.getTime() < new Date(-4700880000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和45
  if (
    new Date(410520000) <= date.getTime() &&
    date.getTime() < new Date(1403160000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1403160000) <= date.getTime() &&
    date.getTime() < new Date(1447320000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1447320000) <= date.getTime() &&
    date.getTime() < new Date(2958360000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(8139720000) <= date.getTime() &&
    date.getTime() < new Date(9176520000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(9176520000) <= date.getTime() &&
    date.getTime() < new Date(9239640000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(9239640000) <= date.getTime() &&
    date.getTime() < new Date(10794840000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(16204260000) <= date.getTime() &&
    date.getTime() < new Date(17241060000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(17241060000) <= date.getTime() &&
    date.getTime() < new Date(17362440000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(17362440000) <= date.getTime() &&
    date.getTime() < new Date(18917640000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(24253320000) <= date.getTime() &&
    date.getTime() < new Date(25290120000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(25290120000) <= date.getTime() &&
    date.getTime() < new Date(25300680000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(25300680000) <= date.getTime() &&
    date.getTime() < new Date(26855880000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和46
  if (
    new Date(31967100000) <= date.getTime() &&
    date.getTime() < new Date(32959560000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(32959560000) <= date.getTime() &&
    date.getTime() < new Date(33003900000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(33003900000) <= date.getTime() &&
    date.getTime() < new Date(34514760000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(39695760000) <= date.getTime() &&
    date.getTime() < new Date(40732560000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(40732560000) <= date.getTime() &&
    date.getTime() < new Date(40795680000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(40795680000) <= date.getTime() &&
    date.getTime() < new Date(42350880000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(47760660000) <= date.getTime() &&
    date.getTime() < new Date(48797460000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(48797460000) <= date.getTime() &&
    date.getTime() < new Date(48919200000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(48919200000) <= date.getTime() &&
    date.getTime() < new Date(50474400000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(55810740000) <= date.getTime() &&
    date.getTime() < new Date(56847540000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(56847540000) <= date.getTime() &&
    date.getTime() < new Date(56858220000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(56858220000) <= date.getTime() &&
    date.getTime() < new Date(58413420000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和47
  if (
    new Date(63524520000) <= date.getTime() &&
    date.getTime() < new Date(64516800000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(64516800000) <= date.getTime() &&
    date.getTime() < new Date(64561320000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(64561320000) <= date.getTime() &&
    date.getTime() < new Date(66072000000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(71252940000) <= date.getTime() &&
    date.getTime() < new Date(72289740000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(72289740000) <= date.getTime() &&
    date.getTime() < new Date(72352860000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(72352860000) <= date.getTime() &&
    date.getTime() < new Date(73908060000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(79317780000) <= date.getTime() &&
    date.getTime() < new Date(80354580000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(80354580000) <= date.getTime() &&
    date.getTime() < new Date(80476140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(80476140000) <= date.getTime() &&
    date.getTime() < new Date(82031340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(87367320000) <= date.getTime() &&
    date.getTime() < new Date(88404120000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(88404120000) <= date.getTime() &&
    date.getTime() < new Date(88414800000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(88414800000) <= date.getTime() &&
    date.getTime() < new Date(89970000000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和48
  if (
    new Date(95081160000) <= date.getTime() &&
    date.getTime() < new Date(96073440000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(96073440000) <= date.getTime() &&
    date.getTime() < new Date(96117960000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(96117960000) <= date.getTime() &&
    date.getTime() < new Date(97628640000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(102809640000) <= date.getTime() &&
    date.getTime() < new Date(103846440000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(103846440000) <= date.getTime() &&
    date.getTime() < new Date(103909560000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(103909560000) <= date.getTime() &&
    date.getTime() < new Date(105464760000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(110874420000) <= date.getTime() &&
    date.getTime() < new Date(111911220000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(111911220000) <= date.getTime() &&
    date.getTime() < new Date(112032780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(112032780000) <= date.getTime() &&
    date.getTime() < new Date(113587980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(118924080000) <= date.getTime() &&
    date.getTime() < new Date(119960880000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(119960880000) <= date.getTime() &&
    date.getTime() < new Date(119971680000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(119971680000) <= date.getTime() &&
    date.getTime() < new Date(121526880000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和49
  if (
    new Date(126638400000) <= date.getTime() &&
    date.getTime() < new Date(127630800000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(127630800000) <= date.getTime() &&
    date.getTime() < new Date(127675200000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(127675200000) <= date.getTime() &&
    date.getTime() < new Date(129186000000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(134366700000) <= date.getTime() &&
    date.getTime() < new Date(135403500000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(135403500000) <= date.getTime() &&
    date.getTime() < new Date(135466440000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(135466440000) <= date.getTime() &&
    date.getTime() < new Date(137021640000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(142431060000) <= date.getTime() &&
    date.getTime() < new Date(143467860000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(143467860000) <= date.getTime() &&
    date.getTime() < new Date(143589420000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(143589420000) <= date.getTime() &&
    date.getTime() < new Date(145144620000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(150480900000) <= date.getTime() &&
    date.getTime() < new Date(151517700000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(151517700000) <= date.getTime() &&
    date.getTime() < new Date(151528680000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(151528680000) <= date.getTime() &&
    date.getTime() < new Date(153083880000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和50
  if (
    new Date(158195880000) <= date.getTime() &&
    date.getTime() < new Date(159188340000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(159188340000) <= date.getTime() &&
    date.getTime() < new Date(159232680000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(159232680000) <= date.getTime() &&
    date.getTime() < new Date(160743540000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(165924120000) <= date.getTime() &&
    date.getTime() < new Date(166960920000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(166960920000) <= date.getTime() &&
    date.getTime() < new Date(167023620000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(167023620000) <= date.getTime() &&
    date.getTime() < new Date(168578820000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(173987940000) <= date.getTime() &&
    date.getTime() < new Date(175024740000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(175024740000) <= date.getTime() &&
    date.getTime() < new Date(175146300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(175146300000) <= date.getTime() &&
    date.getTime() < new Date(176701500000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(182037720000) <= date.getTime() &&
    date.getTime() < new Date(183074520000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(183074520000) <= date.getTime() &&
    date.getTime() < new Date(183085380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(183085380000) <= date.getTime() &&
    date.getTime() < new Date(184640580000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和51
  if (
    new Date(189752280000) <= date.getTime() &&
    date.getTime() < new Date(190744800000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(190744800000) <= date.getTime() &&
    date.getTime() < new Date(190789080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(190789080000) <= date.getTime() &&
    date.getTime() < new Date(192300000000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(197480820000) <= date.getTime() &&
    date.getTime() < new Date(198517620000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(198517620000) <= date.getTime() &&
    date.getTime() < new Date(198580440000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(198580440000) <= date.getTime() &&
    date.getTime() < new Date(200135640000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(205545060000) <= date.getTime() &&
    date.getTime() < new Date(206581860000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(206581860000) <= date.getTime() &&
    date.getTime() < new Date(206703540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(206703540000) <= date.getTime() &&
    date.getTime() < new Date(208258740000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(213595080000) <= date.getTime() &&
    date.getTime() < new Date(214631880000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(214631880000) <= date.getTime() &&
    date.getTime() < new Date(214642740000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(214642740000) <= date.getTime() &&
    date.getTime() < new Date(216197940000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和52
  if (
    new Date(221309460000) <= date.getTime() &&
    date.getTime() < new Date(222302040000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(222302040000) <= date.getTime() &&
    date.getTime() < new Date(222346260000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(222346260000) <= date.getTime() &&
    date.getTime() < new Date(223857240000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(229038360000) <= date.getTime() &&
    date.getTime() < new Date(230075160000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(230075160000) <= date.getTime() &&
    date.getTime() < new Date(230138160000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(230138160000) <= date.getTime() &&
    date.getTime() < new Date(231693360000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(237102480000) <= date.getTime() &&
    date.getTime() < new Date(238139280000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(238139280000) <= date.getTime() &&
    date.getTime() < new Date(238260600000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(238260600000) <= date.getTime() &&
    date.getTime() < new Date(239815800000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(245151840000) <= date.getTime() &&
    date.getTime() < new Date(246188640000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(246188640000) <= date.getTime() &&
    date.getTime() < new Date(246199560000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(246199560000) <= date.getTime() &&
    date.getTime() < new Date(247754760000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和53
  if (
    new Date(252866640000) <= date.getTime() &&
    date.getTime() < new Date(253859220000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(253859220000) <= date.getTime() &&
    date.getTime() < new Date(253903440000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(253903440000) <= date.getTime() &&
    date.getTime() < new Date(255414420000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(260595540000) <= date.getTime() &&
    date.getTime() < new Date(261632340000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(261632340000) <= date.getTime() &&
    date.getTime() < new Date(261695340000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(261695340000) <= date.getTime() &&
    date.getTime() < new Date(263250540000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(268659420000) <= date.getTime() &&
    date.getTime() < new Date(269696220000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(269696220000) <= date.getTime() &&
    date.getTime() < new Date(269817480000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(269817480000) <= date.getTime() &&
    date.getTime() < new Date(271372680000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(276708660000) <= date.getTime() &&
    date.getTime() < new Date(277745460000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(277745460000) <= date.getTime() &&
    date.getTime() < new Date(277756440000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(277756440000) <= date.getTime() &&
    date.getTime() < new Date(279311640000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和54
  if (
    new Date(284423520000) <= date.getTime() &&
    date.getTime() < new Date(285415980000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(285415980000) <= date.getTime() &&
    date.getTime() < new Date(285460320000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(285460320000) <= date.getTime() &&
    date.getTime() < new Date(286971180000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(292151880000) <= date.getTime() &&
    date.getTime() < new Date(293188680000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(293188680000) <= date.getTime() &&
    date.getTime() < new Date(293251620000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(293251620000) <= date.getTime() &&
    date.getTime() < new Date(294806820000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(300216300000) <= date.getTime() &&
    date.getTime() < new Date(301253100000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(301253100000) <= date.getTime() &&
    date.getTime() < new Date(301374660000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(301374660000) <= date.getTime() &&
    date.getTime() < new Date(302929860000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(308266200000) <= date.getTime() &&
    date.getTime() < new Date(309303000000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(309303000000) <= date.getTime() &&
    date.getTime() < new Date(309313980000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(309313980000) <= date.getTime() &&
    date.getTime() < new Date(310869180000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和55
  if (
    new Date(315980940000) <= date.getTime() &&
    date.getTime() < new Date(316973400000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(316973400000) <= date.getTime() &&
    date.getTime() < new Date(317017740000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(317017740000) <= date.getTime() &&
    date.getTime() < new Date(318528600000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(323709300000) <= date.getTime() &&
    date.getTime() < new Date(324746100000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(324746100000) <= date.getTime() &&
    date.getTime() < new Date(324809100000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(324809100000) <= date.getTime() &&
    date.getTime() < new Date(326364300000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(331773840000) <= date.getTime() &&
    date.getTime() < new Date(332810640000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(332810640000) <= date.getTime() &&
    date.getTime() < new Date(332932140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(332932140000) <= date.getTime() &&
    date.getTime() < new Date(334487340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(339823200000) <= date.getTime() &&
    date.getTime() < new Date(340860000000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(340860000000) <= date.getTime() &&
    date.getTime() < new Date(340870740000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(340870740000) <= date.getTime() &&
    date.getTime() < new Date(342425940000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和56
  if (
    new Date(347537580000) <= date.getTime() &&
    date.getTime() < new Date(348530160000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(348530160000) <= date.getTime() &&
    date.getTime() < new Date(348574380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(348574380000) <= date.getTime() &&
    date.getTime() < new Date(350085360000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(355266300000) <= date.getTime() &&
    date.getTime() < new Date(356303100000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(356303100000) <= date.getTime() &&
    date.getTime() < new Date(356366100000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(356366100000) <= date.getTime() &&
    date.getTime() < new Date(357921300000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(363330720000) <= date.getTime() &&
    date.getTime() < new Date(364367520000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(364367520000) <= date.getTime() &&
    date.getTime() < new Date(364489020000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(364489020000) <= date.getTime() &&
    date.getTime() < new Date(366044220000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(371380200000) <= date.getTime() &&
    date.getTime() < new Date(372417000000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(372417000000) <= date.getTime() &&
    date.getTime() < new Date(372427740000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(372427740000) <= date.getTime() &&
    date.getTime() < new Date(373982940000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和57
  if (
    new Date(379094580000) <= date.getTime() &&
    date.getTime() < new Date(380087160000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(380087160000) <= date.getTime() &&
    date.getTime() < new Date(380131380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(380131380000) <= date.getTime() &&
    date.getTime() < new Date(381642360000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(386823180000) <= date.getTime() &&
    date.getTime() < new Date(387859980000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(387859980000) <= date.getTime() &&
    date.getTime() < new Date(387922800000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(387922800000) <= date.getTime() &&
    date.getTime() < new Date(389478000000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(394887300000) <= date.getTime() &&
    date.getTime() < new Date(395924100000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(395924100000) <= date.getTime() &&
    date.getTime() < new Date(396045720000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(396045720000) <= date.getTime() &&
    date.getTime() < new Date(397600920000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(402937320000) <= date.getTime() &&
    date.getTime() < new Date(403974120000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(403974120000) <= date.getTime() &&
    date.getTime() < new Date(403985040000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(403985040000) <= date.getTime() &&
    date.getTime() < new Date(405540240000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和58
  if (
    new Date(410651940000) <= date.getTime() &&
    date.getTime() < new Date(411644400000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(411644400000) <= date.getTime() &&
    date.getTime() < new Date(411688740000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(411688740000) <= date.getTime() &&
    date.getTime() < new Date(413199600000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(418380240000) <= date.getTime() &&
    date.getTime() < new Date(419417040000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(419417040000) <= date.getTime() &&
    date.getTime() < new Date(419479860000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(419479860000) <= date.getTime() &&
    date.getTime() < new Date(421035060000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(426444180000) <= date.getTime() &&
    date.getTime() < new Date(427480980000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(427480980000) <= date.getTime() &&
    date.getTime() < new Date(427602600000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(427602600000) <= date.getTime() &&
    date.getTime() < new Date(429157800000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(434494260000) <= date.getTime() &&
    date.getTime() < new Date(435531060000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(435531060000) <= date.getTime() &&
    date.getTime() < new Date(435541980000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(435541980000) <= date.getTime() &&
    date.getTime() < new Date(437097180000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和59
  if (
    new Date(442208460000) <= date.getTime() &&
    date.getTime() < new Date(443200740000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(443200740000) <= date.getTime() &&
    date.getTime() < new Date(443245260000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(443245260000) <= date.getTime() &&
    date.getTime() < new Date(444755940000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(449936520000) <= date.getTime() &&
    date.getTime() < new Date(450973320000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(450973320000) <= date.getTime() &&
    date.getTime() < new Date(451036260000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(451036260000) <= date.getTime() &&
    date.getTime() < new Date(452591460000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(458000940000) <= date.getTime() &&
    date.getTime() < new Date(459037740000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(459037740000) <= date.getTime() &&
    date.getTime() < new Date(459159480000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(459159480000) <= date.getTime() &&
    date.getTime() < new Date(460714680000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(466051380000) <= date.getTime() &&
    date.getTime() < new Date(467088180000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(467088180000) <= date.getTime() &&
    date.getTime() < new Date(467099160000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(467099160000) <= date.getTime() &&
    date.getTime() < new Date(468654360000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和60
  if (
    new Date(473765700000) <= date.getTime() &&
    date.getTime() < new Date(474757920000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(474757920000) <= date.getTime() &&
    date.getTime() < new Date(474802500000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(474802500000) <= date.getTime() &&
    date.getTime() < new Date(476313120000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(481493640000) <= date.getTime() &&
    date.getTime() < new Date(482530440000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(482530440000) <= date.getTime() &&
    date.getTime() < new Date(482593380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(482593380000) <= date.getTime() &&
    date.getTime() < new Date(484148580000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(489557940000) <= date.getTime() &&
    date.getTime() < new Date(490594740000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(490594740000) <= date.getTime() &&
    date.getTime() < new Date(490716240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(490716240000) <= date.getTime() &&
    date.getTime() < new Date(492271440000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(497607900000) <= date.getTime() &&
    date.getTime() < new Date(498644700000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(498644700000) <= date.getTime() &&
    date.getTime() < new Date(498655740000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(498655740000) <= date.getTime() &&
    date.getTime() < new Date(500210940000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和61
  if (
    new Date(505322880000) <= date.getTime() &&
    date.getTime() < new Date(506315280000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(506315280000) <= date.getTime() &&
    date.getTime() < new Date(506359680000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(506359680000) <= date.getTime() &&
    date.getTime() < new Date(507870480000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(513050760000) <= date.getTime() &&
    date.getTime() < new Date(514087560000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(514087560000) <= date.getTime() &&
    date.getTime() < new Date(514150260000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(514150260000) <= date.getTime() &&
    date.getTime() < new Date(515705460000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(521114460000) <= date.getTime() &&
    date.getTime() < new Date(522151260000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(522151260000) <= date.getTime() &&
    date.getTime() < new Date(522272760000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(522272760000) <= date.getTime() &&
    date.getTime() < new Date(523827960000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(529164420000) <= date.getTime() &&
    date.getTime() < new Date(530201220000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(530201220000) <= date.getTime() &&
    date.getTime() < new Date(530212380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(530212380000) <= date.getTime() &&
    date.getTime() < new Date(531767580000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和62
  if (
    new Date(536879580000) <= date.getTime() &&
    date.getTime() < new Date(537871920000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(537871920000) <= date.getTime() &&
    date.getTime() < new Date(537916380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(537916380000) <= date.getTime() &&
    date.getTime() < new Date(539427120000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(544607040000) <= date.getTime() &&
    date.getTime() < new Date(544607040000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(544607040000) <= date.getTime() &&
    date.getTime() < new Date(545706360000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(545706360000) <= date.getTime() &&
    date.getTime() < new Date(547261560000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(552670740000) <= date.getTime() &&
    date.getTime() < new Date(553707540000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(553707540000) <= date.getTime() &&
    date.getTime() < new Date(553829340000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(553829340000) <= date.getTime() &&
    date.getTime() < new Date(555384540000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(560721600000) <= date.getTime() &&
    date.getTime() < new Date(561758400000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(561758400000) <= date.getTime() &&
    date.getTime() < new Date(561769560000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(561769560000) <= date.getTime() &&
    date.getTime() < new Date(563324760000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //昭和63
  if (
    new Date(568436640000) <= date.getTime() &&
    date.getTime() < new Date(569428980000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(569428980000) <= date.getTime() &&
    date.getTime() < new Date(569473440000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(569473440000) <= date.getTime() &&
    date.getTime() < new Date(570984180000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(576164340000) <= date.getTime() &&
    date.getTime() < new Date(577201140000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(577201140000) <= date.getTime() &&
    date.getTime() < new Date(577263720000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(577263720000) <= date.getTime() &&
    date.getTime() < new Date(578818920000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(584227980000) <= date.getTime() &&
    date.getTime() < new Date(585264780000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(585264780000) <= date.getTime() &&
    date.getTime() < new Date(585386400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(585386400000) <= date.getTime() &&
    date.getTime() < new Date(586941600000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(592278300000) <= date.getTime() &&
    date.getTime() < new Date(593315100000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(593315100000) <= date.getTime() &&
    date.getTime() < new Date(593326140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(593326140000) <= date.getTime() &&
    date.getTime() < new Date(594881340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成１
  if (
    new Date(599993160000) <= date.getTime() &&
    date.getTime() < new Date(600985620000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(600985620000) <= date.getTime() &&
    date.getTime() < new Date(601029960000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(601029960000) <= date.getTime() &&
    date.getTime() < new Date(602540820000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(607721400000) <= date.getTime() &&
    date.getTime() < new Date(608758200000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(608758200000) <= date.getTime() &&
    date.getTime() < new Date(608820840000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(608820840000) <= date.getTime() &&
    date.getTime() < new Date(610376040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(615784740000) <= date.getTime() &&
    date.getTime() < new Date(616821540000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(616821540000) <= date.getTime() &&
    date.getTime() < new Date(616943040000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(616943040000) <= date.getTime() &&
    date.getTime() < new Date(618498240000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(623834820000) <= date.getTime() &&
    date.getTime() < new Date(624871620000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(624871620000) <= date.getTime() &&
    date.getTime() < new Date(624882840000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(624882840000) <= date.getTime() &&
    date.getTime() < new Date(626438040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成２
  if (
    new Date(631549980000) <= date.getTime() &&
    date.getTime() < new Date(632542440000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(632542440000) <= date.getTime() &&
    date.getTime() < new Date(632586780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(632586780000) <= date.getTime() &&
    date.getTime() < new Date(634097640000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(639277980000) <= date.getTime() &&
    date.getTime() < new Date(640314780000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(640314780000) <= date.getTime() &&
    date.getTime() < new Date(640377300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(640377300000) <= date.getTime() &&
    date.getTime() < new Date(641932500000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(647341200000) <= date.getTime() &&
    date.getTime() < new Date(648378000000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(648378000000) <= date.getTime() &&
    date.getTime() < new Date(648499560000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(648499560000) <= date.getTime() &&
    date.getTime() < new Date(650054760000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(655391640000) <= date.getTime() &&
    date.getTime() < new Date(656428440000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(656428440000) <= date.getTime() &&
    date.getTime() < new Date(656439780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(656439780000) <= date.getTime() &&
    date.getTime() < new Date(657994980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成３
  if (
    new Date(663107280000) <= date.getTime() &&
    date.getTime() < new Date(664099680000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(664099680000) <= date.getTime() &&
    date.getTime() < new Date(664144080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(664144080000) <= date.getTime() &&
    date.getTime() < new Date(665654880000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(670835100000) <= date.getTime() &&
    date.getTime() < new Date(671871900000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(671871900000) <= date.getTime() &&
    date.getTime() < new Date(671934420000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(671934420000) <= date.getTime() &&
    date.getTime() < new Date(673489620000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(678898380000) <= date.getTime() &&
    date.getTime() < new Date(679935180000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(679935180000) <= date.getTime() &&
    date.getTime() < new Date(680056620000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(680056620000) <= date.getTime() &&
    date.getTime() < new Date(681611820000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(686948460000) <= date.getTime() &&
    date.getTime() < new Date(687985260000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(687985260000) <= date.getTime() &&
    date.getTime() < new Date(687996480000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(687996480000) <= date.getTime() &&
    date.getTime() < new Date(689551680000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成４
  if (
    new Date(694663740000) <= date.getTime() &&
    date.getTime() < new Date(695656080000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(695656080000) <= date.getTime() &&
    date.getTime() < new Date(695700540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(695700540000) <= date.getTime() &&
    date.getTime() < new Date(697211280000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(702391500000) <= date.getTime() &&
    date.getTime() < new Date(703428300000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(703428300000) <= date.getTime() &&
    date.getTime() < new Date(703490940000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(703490940000) <= date.getTime() &&
    date.getTime() < new Date(705046140000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(710455200000) <= date.getTime() &&
    date.getTime() < new Date(711492000000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(711492000000) <= date.getTime() &&
    date.getTime() < new Date(711613620000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(711613620000) <= date.getTime() &&
    date.getTime() < new Date(713168820000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(718505460000) <= date.getTime() &&
    date.getTime() < new Date(719542260000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(719542260000) <= date.getTime() &&
    date.getTime() < new Date(719553420000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(719553420000) <= date.getTime() &&
    date.getTime() < new Date(721108620000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成５
  if (
    new Date(726220620000) <= date.getTime() &&
    date.getTime() < new Date(727213020000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(727213020000) <= date.getTime() &&
    date.getTime() < new Date(727257420000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(727257420000) <= date.getTime() &&
    date.getTime() < new Date(728768220000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(733948620000) <= date.getTime() &&
    date.getTime() < new Date(734985420000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(734985420000) <= date.getTime() &&
    date.getTime() < new Date(735048120000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(735048120000) <= date.getTime() &&
    date.getTime() < new Date(736603320000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(742012320000) <= date.getTime() &&
    date.getTime() < new Date(743049120000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(743049120000) <= date.getTime() &&
    date.getTime() < new Date(743170680000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(743170680000) <= date.getTime() &&
    date.getTime() < new Date(744725880000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(750062400000) <= date.getTime() &&
    date.getTime() < new Date(751099200000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(751099200000) <= date.getTime() &&
    date.getTime() < new Date(751110360000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(751110360000) <= date.getTime() &&
    date.getTime() < new Date(752665560000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成６
  if (
    new Date(757777680000) <= date.getTime() &&
    date.getTime() < new Date(758770260000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(758770260000) <= date.getTime() &&
    date.getTime() < new Date(758814480000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(758814480000) <= date.getTime() &&
    date.getTime() < new Date(760325460000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(765505920000) <= date.getTime() &&
    date.getTime() < new Date(766542720000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(766542720000) <= date.getTime() &&
    date.getTime() < new Date(766605240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(766605240000) <= date.getTime() &&
    date.getTime() < new Date(768160440000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(773569140000) <= date.getTime() &&
    date.getTime() < new Date(774605940000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(774605940000) <= date.getTime() &&
    date.getTime() < new Date(774727440000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(774727440000) <= date.getTime() &&
    date.getTime() < new Date(776282640000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(781619340000) <= date.getTime() &&
    date.getTime() < new Date(782656140000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(782656140000) <= date.getTime() &&
    date.getTime() < new Date(782667360000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(782667360000) <= date.getTime() &&
    date.getTime() < new Date(784222560000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成７
  if (
    new Date(789334440000) <= date.getTime() &&
    date.getTime() < new Date(790326780000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(790326780000) <= date.getTime() &&
    date.getTime() < new Date(790371240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(790371240000) <= date.getTime() &&
    date.getTime() < new Date(791881980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(797062080000) <= date.getTime() &&
    date.getTime() < new Date(798098880000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(798098880000) <= date.getTime() &&
    date.getTime() < new Date(798161400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(798161400000) <= date.getTime() &&
    date.getTime() < new Date(799716600000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(805125660000) <= date.getTime() &&
    date.getTime() < new Date(806162460000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(806162460000) <= date.getTime() &&
    date.getTime() < new Date(806284320000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(806284320000) <= date.getTime() &&
    date.getTime() < new Date(807839520000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(813176820000) <= date.getTime() &&
    date.getTime() < new Date(814213620000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(814213620000) <= date.getTime() &&
    date.getTime() < new Date(814224960000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(814224960000) <= date.getTime() &&
    date.getTime() < new Date(815780160000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成８
  if (
    new Date(820891860000) <= date.getTime() &&
    date.getTime() < new Date(821884080000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(821884080000) <= date.getTime() &&
    date.getTime() < new Date(821928660000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(821928660000) <= date.getTime() &&
    date.getTime() < new Date(823439280000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(828619320000) <= date.getTime() &&
    date.getTime() < new Date(829656120000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(829656120000) <= date.getTime() &&
    date.getTime() < new Date(829718760000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(829718760000) <= date.getTime() &&
    date.getTime() < new Date(831273960000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(836683200000) <= date.getTime() &&
    date.getTime() < new Date(837720000000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(837720000000) <= date.getTime() &&
    date.getTime() < new Date(837841740000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(837841740000) <= date.getTime() &&
    date.getTime() < new Date(839396940000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(844733940000) <= date.getTime() &&
    date.getTime() < new Date(845770740000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(845770740000) <= date.getTime() &&
    date.getTime() < new Date(845782020000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(845782020000) <= date.getTime() &&
    date.getTime() < new Date(847337220000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成９
  if (
    new Date(852449040000) <= date.getTime() &&
    date.getTime() < new Date(853441320000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(853441320000) <= date.getTime() &&
    date.getTime() < new Date(853485840000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(853485840000) <= date.getTime() &&
    date.getTime() < new Date(854996520000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(860176560000) <= date.getTime() &&
    date.getTime() < new Date(861213360000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(861213360000) <= date.getTime() &&
    date.getTime() < new Date(861275940000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(861275940000) <= date.getTime() &&
    date.getTime() < new Date(862831140000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(868240140000) <= date.getTime() &&
    date.getTime() < new Date(869276940000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(869276940000) <= date.getTime() &&
    date.getTime() < new Date(869398560000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(869398560000) <= date.getTime() &&
    date.getTime() < new Date(870953760000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(876290700000) <= date.getTime() &&
    date.getTime() < new Date(877327500000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(877327500000) <= date.getTime() &&
    date.getTime() < new Date(877338900000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(877338900000) <= date.getTime() &&
    date.getTime() < new Date(878894100000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成10
  if (
    new Date(884006280000) <= date.getTime() &&
    date.getTime() < new Date(884998620000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(884998620000) <= date.getTime() &&
    date.getTime() < new Date(885043080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(885043080000) <= date.getTime() &&
    date.getTime() < new Date(886553820000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(891733500000) <= date.getTime() &&
    date.getTime() < new Date(892770300000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(892770300000) <= date.getTime() &&
    date.getTime() < new Date(892832580000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(892832580000) <= date.getTime() &&
    date.getTime() < new Date(894387780000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(899796600000) <= date.getTime() &&
    date.getTime() < new Date(900833400000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(900833400000) <= date.getTime() &&
    date.getTime() < new Date(900955200000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(900955200000) <= date.getTime() &&
    date.getTime() < new Date(902510400000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(907847760000) <= date.getTime() &&
    date.getTime() < new Date(908884560000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(908884560000) <= date.getTime() &&
    date.getTime() < new Date(908896080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(908896080000) <= date.getTime() &&
    date.getTime() < new Date(910451280000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成11
  if (
    new Date(915563820000) <= date.getTime() &&
    date.getTime() < new Date(916556220000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(916556220000) <= date.getTime() &&
    date.getTime() < new Date(916600620000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(916600620000) <= date.getTime() &&
    date.getTime() < new Date(918111420000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(923291100000) <= date.getTime() &&
    date.getTime() < new Date(924327900000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(924327900000) <= date.getTime() &&
    date.getTime() < new Date(924390060000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(924390060000) <= date.getTime() &&
    date.getTime() < new Date(925945260000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(931353900000) <= date.getTime() &&
    date.getTime() < new Date(932390700000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(932390700000) <= date.getTime() &&
    date.getTime() < new Date(932512440000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(932512440000) <= date.getTime() &&
    date.getTime() < new Date(934067640000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(939404880000) <= date.getTime() &&
    date.getTime() < new Date(940441680000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(940441680000) <= date.getTime() &&
    date.getTime() < new Date(940453080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(940453080000) <= date.getTime() &&
    date.getTime() < new Date(942008280000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成12
  if (
    new Date(947120460000) <= date.getTime() &&
    date.getTime() < new Date(948112800000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(948112800000) <= date.getTime() &&
    date.getTime() < new Date(948157260000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(948157260000) <= date.getTime() &&
    date.getTime() < new Date(949668000000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(954847920000) <= date.getTime() &&
    date.getTime() < new Date(955884720000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(955884720000) <= date.getTime() &&
    date.getTime() < new Date(955947000000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(955947000000) <= date.getTime() &&
    date.getTime() < new Date(957502200000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(962910840000) <= date.getTime() &&
    date.getTime() < new Date(963947640000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(963947640000) <= date.getTime() &&
    date.getTime() < new Date(964069380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(964069380000) <= date.getTime() &&
    date.getTime() < new Date(965624580000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(970961880000) <= date.getTime() &&
    date.getTime() < new Date(971998680000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(971998680000) <= date.getTime() &&
    date.getTime() < new Date(972010080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(972010080000) <= date.getTime() &&
    date.getTime() < new Date(973565280000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成13
  if (
    new Date(978677340000) <= date.getTime() &&
    date.getTime() < new Date(979669740000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(979669740000) <= date.getTime() &&
    date.getTime() < new Date(979714140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(979714140000) <= date.getTime() &&
    date.getTime() < new Date(981224940000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(986405040000) <= date.getTime() &&
    date.getTime() < new Date(987441840000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(987441840000) <= date.getTime() &&
    date.getTime() < new Date(987504300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(987504300000) <= date.getTime() &&
    date.getTime() < new Date(989059500000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(994468020000) <= date.getTime() &&
    date.getTime() < new Date(995504820000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(995504820000) <= date.getTime() &&
    date.getTime() < new Date(995626320000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(995626320000) <= date.getTime() &&
    date.getTime() < new Date(997181520000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1002518700000) <= date.getTime() &&
    date.getTime() < new Date(1003555500000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1003555500000) <= date.getTime() &&
    date.getTime() < new Date(1003567020000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1003567020000) <= date.getTime() &&
    date.getTime() < new Date(1005122220000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成14
  if (
    new Date(1010234580000) <= date.getTime() &&
    date.getTime() < new Date(1011227040000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1011227040000) <= date.getTime() &&
    date.getTime() < new Date(1011271380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1011271380000) <= date.getTime() &&
    date.getTime() < new Date(1012782240000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1017962280000) <= date.getTime() &&
    date.getTime() < new Date(1018999080000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1018999080000) <= date.getTime() &&
    date.getTime() < new Date(1019061420000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1019061420000) <= date.getTime() &&
    date.getTime() < new Date(1020616620000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1026024960000) <= date.getTime() &&
    date.getTime() < new Date(1027061760000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1027061760000) <= date.getTime() &&
    date.getTime() < new Date(1027183140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1027183140000) <= date.getTime() &&
    date.getTime() < new Date(1028738340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1034075340000) <= date.getTime() &&
    date.getTime() < new Date(1035112140000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1035112140000) <= date.getTime() &&
    date.getTime() < new Date(1035123720000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1035123720000) <= date.getTime() &&
    date.getTime() < new Date(1036678920000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成15
  if (
    new Date(1041791280000) <= date.getTime() &&
    date.getTime() < new Date(1042783500000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1042783500000) <= date.getTime() &&
    date.getTime() < new Date(1042828080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1042828080000) <= date.getTime() &&
    date.getTime() < new Date(1044338700000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1049518320000) <= date.getTime() &&
    date.getTime() < new Date(1050555120000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1050555120000) <= date.getTime() &&
    date.getTime() < new Date(1050617400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1050617400000) <= date.getTime() &&
    date.getTime() < new Date(1052172600000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1057581360000) <= date.getTime() &&
    date.getTime() < new Date(1058618160000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1058618160000) <= date.getTime() &&
    date.getTime() < new Date(1058739840000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1058739840000) <= date.getTime() &&
    date.getTime() < new Date(1060295040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1065632400000) <= date.getTime() &&
    date.getTime() < new Date(1066669200000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1066669200000) <= date.getTime() &&
    date.getTime() < new Date(1066680780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1066680780000) <= date.getTime() &&
    date.getTime() < new Date(1068235980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成16
  if (
    new Date(1073348280000) <= date.getTime() &&
    date.getTime() < new Date(1074340560000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1074340560000) <= date.getTime() &&
    date.getTime() < new Date(1074385080000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1074385080000) <= date.getTime() &&
    date.getTime() < new Date(1075895760000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1081075380000) <= date.getTime() &&
    date.getTime() < new Date(1082112180000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1082112180000) <= date.getTime() &&
    date.getTime() < new Date(1082174520000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1082174520000) <= date.getTime() &&
    date.getTime() < new Date(1083729720000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1089138660000) <= date.getTime() &&
    date.getTime() < new Date(1090175460000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1090175460000) <= date.getTime() &&
    date.getTime() < new Date(1090297200000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1090297200000) <= date.getTime() &&
    date.getTime() < new Date(1091852400000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1097189340000) <= date.getTime() &&
    date.getTime() < new Date(1098226140000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1098226140000) <= date.getTime() &&
    date.getTime() < new Date(1098237480000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1098237480000) <= date.getTime() &&
    date.getTime() < new Date(1099792680000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成17
  if (
    new Date(1104904980000) <= date.getTime() &&
    date.getTime() < new Date(1105897380000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1105897380000) <= date.getTime() &&
    date.getTime() < new Date(1105941780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1105941780000) <= date.getTime() &&
    date.getTime() < new Date(1107452580000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1112632440000) <= date.getTime() &&
    date.getTime() < new Date(1113669240000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1113669240000) <= date.getTime() &&
    date.getTime() < new Date(1113731580000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1113731580000) <= date.getTime() &&
    date.getTime() < new Date(1115286780000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1120695360000) <= date.getTime() &&
    date.getTime() < new Date(1121732160000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1121732160000) <= date.getTime() &&
    date.getTime() < new Date(1121853780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1121853780000) <= date.getTime() &&
    date.getTime() < new Date(1123408980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1128745980000) <= date.getTime() &&
    date.getTime() < new Date(1129782780000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1129782780000) <= date.getTime() &&
    date.getTime() < new Date(1129794120000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1129794120000) <= date.getTime() &&
    date.getTime() < new Date(1131349320000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成18
  if (
    new Date(1136461620000) <= date.getTime() &&
    date.getTime() < new Date(1137454020000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1137454020000) <= date.getTime() &&
    date.getTime() < new Date(1137498420000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1137498420000) <= date.getTime() &&
    date.getTime() < new Date(1139009220000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1144188900000) <= date.getTime() &&
    date.getTime() < new Date(1145225700000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1145225700000) <= date.getTime() &&
    date.getTime() < new Date(1145287860000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1145287860000) <= date.getTime() &&
    date.getTime() < new Date(1146843060000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1152251460000) <= date.getTime() &&
    date.getTime() < new Date(1153288260000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1153288260000) <= date.getTime() &&
    date.getTime() < new Date(1153410060000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1153410060000) <= date.getTime() &&
    date.getTime() < new Date(1154965260000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1160302860000) <= date.getTime() &&
    date.getTime() < new Date(1161339660000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1161339660000) <= date.getTime() &&
    date.getTime() < new Date(1161351300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1161351300000) <= date.getTime() &&
    date.getTime() < new Date(1162906500000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成19
  if (
    new Date(1168018800000) <= date.getTime() &&
    date.getTime() < new Date(1169011080000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1169011080000) <= date.getTime() &&
    date.getTime() < new Date(1169055600000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1169055600000) <= date.getTime() &&
    date.getTime() < new Date(1170566280000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1175745900000) <= date.getTime() &&
    date.getTime() < new Date(1176782700000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1176782700000) <= date.getTime() &&
    date.getTime() < new Date(1176844800000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1176844800000) <= date.getTime() &&
    date.getTime() < new Date(1178400000000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1183808520000) <= date.getTime() &&
    date.getTime() < new Date(1184845320000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1184845320000) <= date.getTime() &&
    date.getTime() < new Date(1184967060000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1184967060000) <= date.getTime() &&
    date.getTime() < new Date(1186522260000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1191859860000) <= date.getTime() &&
    date.getTime() < new Date(1192896660000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1192896660000) <= date.getTime() &&
    date.getTime() < new Date(1192908240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1192908240000) <= date.getTime() &&
    date.getTime() < new Date(1194463440000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成20
  if (
    new Date(1199575500000) <= date.getTime() &&
    date.getTime() < new Date(1200567600000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1200567600000) <= date.getTime() &&
    date.getTime() < new Date(1200612300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1200612300000) <= date.getTime() &&
    date.getTime() < new Date(1202122800000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1207302360000) <= date.getTime() &&
    date.getTime() < new Date(1208339160000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1208339160000) <= date.getTime() &&
    date.getTime() < new Date(1208401380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1208401380000) <= date.getTime() &&
    date.getTime() < new Date(1209956580000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1215365220000) <= date.getTime() &&
    date.getTime() < new Date(1216402020000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1216402020000) <= date.getTime() &&
    date.getTime() < new Date(1216523760000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1216523760000) <= date.getTime() &&
    date.getTime() < new Date(1218078960000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1223416620000) <= date.getTime() &&
    date.getTime() < new Date(1224453420000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1224453420000) <= date.getTime() &&
    date.getTime() < new Date(1224465000000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1224465000000) <= date.getTime() &&
    date.getTime() < new Date(1226020200000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成21
  if (
    new Date(1231132440000) <= date.getTime() &&
    date.getTime() < new Date(1232124600000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1232124600000) <= date.getTime() &&
    date.getTime() < new Date(1232169240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1232169240000) <= date.getTime() &&
    date.getTime() < new Date(1233679800000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1238859240000) <= date.getTime() &&
    date.getTime() < new Date(1239896040000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1239896040000) <= date.getTime() &&
    date.getTime() < new Date(1239958260000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1239958260000) <= date.getTime() &&
    date.getTime() < new Date(1241513460000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1246921980000) <= date.getTime() &&
    date.getTime() < new Date(1247958780000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1247958780000) <= date.getTime() &&
    date.getTime() < new Date(1248080460000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1248080460000) <= date.getTime() &&
    date.getTime() < new Date(1249635660000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1254973200000) <= date.getTime() &&
    date.getTime() < new Date(1256010000000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1256010000000) <= date.getTime() &&
    date.getTime() < new Date(1256021760000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1256021760000) <= date.getTime() &&
    date.getTime() < new Date(1257576960000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成22
  if (
    new Date(1262689740000) <= date.getTime() &&
    date.getTime() < new Date(1263682080000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1263682080000) <= date.getTime() &&
    date.getTime() < new Date(1263726540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1263726540000) <= date.getTime() &&
    date.getTime() < new Date(1265237280000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1270416600000) <= date.getTime() &&
    date.getTime() < new Date(1271453400000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1271453400000) <= date.getTime() &&
    date.getTime() < new Date(1271515440000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1271515440000) <= date.getTime() &&
    date.getTime() < new Date(1273070640000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1278478920000) <= date.getTime() &&
    date.getTime() < new Date(1279515720000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1279515720000) <= date.getTime() &&
    date.getTime() < new Date(1279637340000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1279637340000) <= date.getTime() &&
    date.getTime() < new Date(1281192540000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1286529960000) <= date.getTime() &&
    date.getTime() < new Date(1287566760000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1287566760000) <= date.getTime() &&
    date.getTime() < new Date(1287578520000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1287578520000) <= date.getTime() &&
    date.getTime() < new Date(1289133720000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成23
  if (
    new Date(1294246500000) <= date.getTime() &&
    date.getTime() < new Date(1295238780000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1295238780000) <= date.getTime() &&
    date.getTime() < new Date(1295283300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1295283300000) <= date.getTime() &&
    date.getTime() < new Date(1296793980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1301973120000) <= date.getTime() &&
    date.getTime() < new Date(1301973120000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1301973120000) <= date.getTime() &&
    date.getTime() < new Date(1303071780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1303071780000) <= date.getTime() &&
    date.getTime() < new Date(1304626980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1310035320000) <= date.getTime() &&
    date.getTime() < new Date(1311072120000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1311072120000) <= date.getTime() &&
    date.getTime() < new Date(1311193980000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1311193980000) <= date.getTime() &&
    date.getTime() < new Date(1312749180000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1318087140000) <= date.getTime() &&
    date.getTime() < new Date(1319123940000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1319123940000) <= date.getTime() &&
    date.getTime() < new Date(1319135700000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1319135700000) <= date.getTime() &&
    date.getTime() < new Date(1320690900000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成24
  if (
    new Date(1325803440000) <= date.getTime() &&
    date.getTime() < new Date(1326795720000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1326795720000) <= date.getTime() &&
    date.getTime() < new Date(1326840240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1326840240000) <= date.getTime() &&
    date.getTime() < new Date(1328350920000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1333530300000) <= date.getTime() &&
    date.getTime() < new Date(1334567100000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1334567100000) <= date.getTime() &&
    date.getTime() < new Date(1334629140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1334629140000) <= date.getTime() &&
    date.getTime() < new Date(1336184340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1341592860000) <= date.getTime() &&
    date.getTime() < new Date(1342629660000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1342629660000) <= date.getTime() &&
    date.getTime() < new Date(1342751400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1342751400000) <= date.getTime() &&
    date.getTime() < new Date(1344306600000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1349644320000) <= date.getTime() &&
    date.getTime() < new Date(1350681120000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1350681120000) <= date.getTime() &&
    date.getTime() < new Date(1350692760000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1350692760000) <= date.getTime() &&
    date.getTime() < new Date(1352247960000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成25
  if (
    new Date(1357360440000) <= date.getTime() &&
    date.getTime() < new Date(1358352780000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1358352780000) <= date.getTime() &&
    date.getTime() < new Date(1358397240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1358397240000) <= date.getTime() &&
    date.getTime() < new Date(1359907980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1365087720000) <= date.getTime() &&
    date.getTime() < new Date(1366124520000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1366124520000) <= date.getTime() &&
    date.getTime() < new Date(1366186680000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1366186680000) <= date.getTime() &&
    date.getTime() < new Date(1367741880000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1373150040000) <= date.getTime() &&
    date.getTime() < new Date(1374186840000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1374186840000) <= date.getTime() &&
    date.getTime() < new Date(1374308400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1374308400000) <= date.getTime() &&
    date.getTime() < new Date(1375863600000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1381201140000) <= date.getTime() &&
    date.getTime() < new Date(1382237940000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1382237940000) <= date.getTime() &&
    date.getTime() < new Date(1382249640000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1382249640000) <= date.getTime() &&
    date.getTime() < new Date(1383804840000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成26
  if (
    new Date(1388917440000) <= date.getTime() &&
    date.getTime() < new Date(1389909780000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1389909780000) <= date.getTime() &&
    date.getTime() < new Date(1389954240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1389954240000) <= date.getTime() &&
    date.getTime() < new Date(1391464980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1396644420000) <= date.getTime() &&
    date.getTime() < new Date(1397681220000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1397681220000) <= date.getTime() &&
    date.getTime() < new Date(1397743140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1397743140000) <= date.getTime() &&
    date.getTime() < new Date(1399298340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1404706500000) <= date.getTime() &&
    date.getTime() < new Date(1405743300000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1405743300000) <= date.getTime() &&
    date.getTime() < new Date(1405864920000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1405864920000) <= date.getTime() &&
    date.getTime() < new Date(1407420120000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1412758080000) <= date.getTime() &&
    date.getTime() < new Date(1413794880000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1413794880000) <= date.getTime() &&
    date.getTime() < new Date(1413806820000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1413806820000) <= date.getTime() &&
    date.getTime() < new Date(1415362020000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成27
  if (
    new Date(1420474860000) <= date.getTime() &&
    date.getTime() < new Date(1421467140000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1421467140000) <= date.getTime() &&
    date.getTime() < new Date(1421511660000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1421511660000) <= date.getTime() &&
    date.getTime() < new Date(1423022340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1428201540000) <= date.getTime() &&
    date.getTime() < new Date(1429238340000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1429238340000) <= date.getTime() &&
    date.getTime() < new Date(1429300320000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1429300320000) <= date.getTime() &&
    date.getTime() < new Date(1430855520000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1436263920000) <= date.getTime() &&
    date.getTime() < new Date(1437300720000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1437300720000) <= date.getTime() &&
    date.getTime() < new Date(1437422460000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1437422460000) <= date.getTime() &&
    date.getTime() < new Date(1438977660000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1444315380000) <= date.getTime() &&
    date.getTime() < new Date(1445352180000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1445352180000) <= date.getTime() &&
    date.getTime() < new Date(1445363940000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1445363940000) <= date.getTime() &&
    date.getTime() < new Date(1446919140000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成28
  if (
    new Date(1452031740000) <= date.getTime() &&
    date.getTime() < new Date(1453023960000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1453023960000) <= date.getTime() &&
    date.getTime() < new Date(1453068540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1453068540000) <= date.getTime() &&
    date.getTime() < new Date(1454579160000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1459758420000) <= date.getTime() &&
    date.getTime() < new Date(1460795220000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1460795220000) <= date.getTime() &&
    date.getTime() < new Date(1460857320000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1460857320000) <= date.getTime() &&
    date.getTime() < new Date(1462412520000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1467820980000) <= date.getTime() &&
    date.getTime() < new Date(1468857780000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1468857780000) <= date.getTime() &&
    date.getTime() < new Date(1468979580000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1468979580000) <= date.getTime() &&
    date.getTime() < new Date(1470534780000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1475872440000) <= date.getTime() &&
    date.getTime() < new Date(1476909240000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1476909240000) <= date.getTime() &&
    date.getTime() < new Date(1476920880000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1476920880000) <= date.getTime() &&
    date.getTime() < new Date(1478476080000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成29
  if (
    new Date(1483588560000) <= date.getTime() &&
    date.getTime() < new Date(1484580840000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1484580840000) <= date.getTime() &&
    date.getTime() < new Date(1484625360000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1484625360000) <= date.getTime() &&
    date.getTime() < new Date(1486136040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1491315420000) <= date.getTime() &&
    date.getTime() < new Date(1492352220000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1492352220000) <= date.getTime() &&
    date.getTime() < new Date(1492414260000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1492414260000) <= date.getTime() &&
    date.getTime() < new Date(1493969460000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1499377860000) <= date.getTime() &&
    date.getTime() < new Date(1500414660000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1500414660000) <= date.getTime() &&
    date.getTime() < new Date(1500536400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1500536400000) <= date.getTime() &&
    date.getTime() < new Date(1502091600000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1507429320000) <= date.getTime() &&
    date.getTime() < new Date(1508466120000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1508466120000) <= date.getTime() &&
    date.getTime() < new Date(1508477880000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1508477880000) <= date.getTime() &&
    date.getTime() < new Date(1510033080000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成30
  if (
    new Date(1515145740000) <= date.getTime() &&
    date.getTime() < new Date(1516138080000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1516138080000) <= date.getTime() &&
    date.getTime() < new Date(1516182540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1516182540000) <= date.getTime() &&
    date.getTime() < new Date(1517693280000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1522872780000) <= date.getTime() &&
    date.getTime() < new Date(1523909580000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1523909580000) <= date.getTime() &&
    date.getTime() < new Date(1523971500000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1523971500000) <= date.getTime() &&
    date.getTime() < new Date(1525526700000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1530934920000) <= date.getTime() &&
    date.getTime() < new Date(1531971720000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1531971720000) <= date.getTime() &&
    date.getTime() < new Date(1532093400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1532093400000) <= date.getTime() &&
    date.getTime() < new Date(1533648600000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1538986440000) <= date.getTime() &&
    date.getTime() < new Date(1540023240000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1540023240000) <= date.getTime() &&
    date.getTime() < new Date(1540035000000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1540035000000) <= date.getTime() &&
    date.getTime() < new Date(1541590200000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //平成31・令和元年
  if (
    new Date(1546702740000) <= date.getTime() &&
    date.getTime() < new Date(1547694840000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1547694840000) <= date.getTime() &&
    date.getTime() < new Date(1547739540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1547739540000) <= date.getTime() &&
    date.getTime() < new Date(1549250040000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1554429060000) <= date.getTime() &&
    date.getTime() < new Date(1555465860000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1555465860000) <= date.getTime() &&
    date.getTime() < new Date(1555527780000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1555527780000) <= date.getTime() &&
    date.getTime() < new Date(1557082980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1562491200000) <= date.getTime() &&
    date.getTime() < new Date(1563528000000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1563528000000) <= date.getTime() &&
    date.getTime() < new Date(1563649980000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1563649980000) <= date.getTime() &&
    date.getTime() < new Date(1565205180000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1570543500000) <= date.getTime() &&
    date.getTime() < new Date(1571580300000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1571580300000) <= date.getTime() &&
    date.getTime() < new Date(1571592240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1571592240000) <= date.getTime() &&
    date.getTime() < new Date(1573147440000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //令和２年
  if (
    new Date(1578259800000) <= date.getTime() &&
    date.getTime() < new Date(1579251780000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1579251780000) <= date.getTime() &&
    date.getTime() < new Date(1579296600000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1579296600000) <= date.getTime() &&
    date.getTime() < new Date(1580806980000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1585985880000) <= date.getTime() &&
    date.getTime() < new Date(1587022680000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1587022680000) <= date.getTime() &&
    date.getTime() < new Date(1587084660000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1587084660000) <= date.getTime() &&
    date.getTime() < new Date(1588639860000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1594048440000) <= date.getTime() &&
    date.getTime() < new Date(1595085240000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1595085240000) <= date.getTime() &&
    date.getTime() < new Date(1595207160000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1595207160000) <= date.getTime() &&
    date.getTime() < new Date(1596762360000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1602100500000) <= date.getTime() &&
    date.getTime() < new Date(1603137300000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1603137300000) <= date.getTime() &&
    date.getTime() < new Date(1603149240000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1603149240000) <= date.getTime() &&
    date.getTime() < new Date(1604704440000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }

  //令和３（2021）
  if (
    new Date(1609816920000) <= date.getTime() &&
    date.getTime() < new Date(1610809140000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1610809140000) <= date.getTime() &&
    date.getTime() < new Date(1610853720000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1610853720000) <= date.getTime() &&
    date.getTime() < new Date(1612364340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1617543300000) <= date.getTime() &&
    date.getTime() < new Date(1618580100000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1618580100000) <= date.getTime() &&
    date.getTime() < new Date(1618642020000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1618642020000) <= date.getTime() &&
    date.getTime() < new Date(1620197220000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1625605500000) <= date.getTime() &&
    date.getTime() < new Date(1626642300000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1626642300000) <= date.getTime() &&
    date.getTime() < new Date(1626764040000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1626764040000) <= date.getTime() &&
    date.getTime() < new Date(1628319240000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1633656960000) <= date.getTime() &&
    date.getTime() < new Date(1634693760000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1634693760000) <= date.getTime() &&
    date.getTime() < new Date(1634705820000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1634705820000) <= date.getTime() &&
    date.getTime() < new Date(1636261020000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //令和４（2022）
  if (
    new Date(1641373920000) <= date.getTime() &&
    date.getTime() < new Date(1642366260000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1642366260000) <= date.getTime() &&
    date.getTime() < new Date(1642410720000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1642410720000) <= date.getTime() &&
    date.getTime() < new Date(1643921460000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1649100060000) <= date.getTime() &&
    date.getTime() < new Date(1650136860000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1650136860000) <= date.getTime() &&
    date.getTime() < new Date(1650198300000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1650198300000) <= date.getTime() &&
    date.getTime() < new Date(1651753500000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1657161300000) <= date.getTime() &&
    date.getTime() < new Date(1658198100000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1658198100000) <= date.getTime() &&
    date.getTime() < new Date(1658320140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1658320140000) <= date.getTime() &&
    date.getTime() < new Date(1659875340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1665213900000) <= date.getTime() &&
    date.getTime() < new Date(1666250700000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1666250700000) <= date.getTime() &&
    date.getTime() < new Date(1666262820000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1666262820000) <= date.getTime() &&
    date.getTime() < new Date(1667818020000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //令和5（2023）
  if (
    new Date(1672931040000) <= date.getTime() &&
    date.getTime() < new Date(1673923320000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1673923320000) <= date.getTime() &&
    date.getTime() < new Date(1673967840000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1673967840000) <= date.getTime() &&
    date.getTime() < new Date(1675478520000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1680657120000) <= date.getTime() &&
    date.getTime() < new Date(1681693920000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1681693920000) <= date.getTime() &&
    date.getTime() < new Date(1681755540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1681755540000) <= date.getTime() &&
    date.getTime() < new Date(1683310740000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1688718600000) <= date.getTime() &&
    date.getTime() < new Date(1689755400000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1689755400000) <= date.getTime() &&
    date.getTime() < new Date(1689877380000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1689877380000) <= date.getTime() &&
    date.getTime() < new Date(1691432580000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1696770840000) <= date.getTime() &&
    date.getTime() < new Date(1697807640000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1697807640000) <= date.getTime() &&
    date.getTime() < new Date(1697819820000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1697819820000) <= date.getTime() &&
    date.getTime() < new Date(1699375020000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //令和6（2024）
  if (
    new Date(1704487740000) <= date.getTime() &&
    date.getTime() < new Date(1705480020000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1705480020000) <= date.getTime() &&
    date.getTime() < new Date(1705524540000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1705524540000) <= date.getTime() &&
    date.getTime() < new Date(1707035220000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1712214060000) <= date.getTime() &&
    date.getTime() < new Date(1713250860000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1713250860000) <= date.getTime() &&
    date.getTime() < new Date(1713312600000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1713312600000) <= date.getTime() &&
    date.getTime() < new Date(1714867800000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1720275600000) <= date.getTime() &&
    date.getTime() < new Date(1721312400000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1721312400000) <= date.getTime() &&
    date.getTime() < new Date(1721434140000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1721434140000) <= date.getTime() &&
    date.getTime() < new Date(1722989340000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1728327780000) <= date.getTime() &&
    date.getTime() < new Date(1729364580000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1729364580000) <= date.getTime() &&
    date.getTime() < new Date(1729376400000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1729376400000) <= date.getTime() &&
    date.getTime() < new Date(1730931600000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  //令和7（2025）
  if (
    new Date(1736044320000) <= date.getTime() &&
    date.getTime() < new Date(1737036600000)
  ) {
    output = "[水旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1737036600000) <= date.getTime() &&
    date.getTime() < new Date(1737081120000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1737081120000) <= date.getTime() &&
    date.getTime() < new Date(1738591800000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1743771000000) <= date.getTime() &&
    date.getTime() < new Date(1744807800000)
  ) {
    output = "[木旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1744807800000) <= date.getTime() &&
    date.getTime() < new Date(1744869420000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1744869420000) <= date.getTime() &&
    date.getTime() < new Date(1746424620000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1751832300000) <= date.getTime() &&
    date.getTime() < new Date(1752869100000)
  ) {
    output = "[火旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1752869100000) <= date.getTime() &&
    date.getTime() < new Date(1752990480000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1752990480000) <= date.getTime() &&
    date.getTime() < new Date(1754545680000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1759884060000) <= date.getTime() &&
    date.getTime() < new Date(1760920860000)
  ) {
    output = "[金旺]";
    msg5.innerText = output;
  }
  if (
    new Date(1760920860000) <= date.getTime() &&
    date.getTime() < new Date(1760933040000)
  ) {
    output = "[GZ]";
    msg5.innerText = output;
  }
  if (
    new Date(1760933040000) <= date.getTime() &&
    date.getTime() < new Date(1762488240000)
  ) {
    output = "[土旺]";
    msg5.innerText = output;
  }

  if (str == "syowa") {
    year = Number(year) - 1925;
  } else if (str == "heisei") {
    year = Number(year) - 1988;
  } else if (str == "reiwa") {
    year = Number(year) - 2018;
  }

  if (month == 0) {
    month = 12;
  }

  //年の干の計算
  if (str == "syowa") {
    amari = (Number(year) + 62) % 10;
    amarisi = (Number(year) + 62) % 12;
  }
  if (str == "heisei") {
    amari = (Number(year) + 125) % 10;
    amarisi = (Number(year) + 125) % 12;
  }
  if (str == "reiwa") {
    amari = (Number(year) + 155) % 10;
    amarisi = (Number(year) + 155) % 12;
  }

  if (amari == 1) {
    output = "甲";
  } else if (amari == 2) {
    output = "乙";
  } else if (amari == 3) {
    output = "丙";
  } else if (amari == 4) {
    output = "丁";
  } else if (amari == 5) {
    output = "戊";
  } else if (amari == 6) {
    output = "己";
  } else if (amari == 7) {
    output = "庚";
  } else if (amari == 8) {
    output = "辛";
  } else if (amari == 9) {
    output = "壬";
  } else if (amari == 10 || amari == 0) {
    output = "癸";
  }

  if (amarisi == 1) {
    output = output + "子";
  } else if (amarisi == 2) {
    output = output + "丑";
  } else if (amarisi == 3) {
    output = output + "寅";
  } else if (amarisi == 4) {
    output = output + "卯";
  } else if (amarisi == 5) {
    output = output + "辰";
  } else if (amarisi == 6) {
    output = output + "巳";
  } else if (amarisi == 7) {
    output = output + "午";
  } else if (amarisi == 8) {
    output = output + "未";
  } else if (amarisi == 9) {
    output = output + "申";
  } else if (amarisi == 10) {
    output = output + "酉";
  } else if (amarisi == 11) {
    output = output + "戌";
  } else if (amarisi == 12 || amarisi == 0) {
    output = output + "亥";
  }

  msg.innerText = output;

  //月の干の計算

  if (amari == 1 || amari == 6) {
    x = 0;
  }
  if (amari == 2 || amari == 7) {
    x = 2;
  }
  if (amari == 3 || amari == 8) {
    x = 4;
  }
  if (amari == 4 || amari == 9) {
    x = 6;
  }
  if (amari == 5 || amari == 10 || amari == 0) {
    x = 8;
  }

  if (month == 1) {
    y = 2;
  }
  if (month == 2) {
    y = 3;
  }
  if (month == 3) {
    y = 4;
  }
  if (month == 4) {
    y = 5;
  }
  if (month == 5) {
    y = 6;
  }
  if (month == 6) {
    y = 7;
  }
  if (month == 7) {
    y = 8;
  }
  if (month == 8) {
    y = 9;
  }
  if (month == 9) {
    y = 10;
  }
  if (month == 10) {
    y = 11;
  }
  if (month == 11) {
    y = 12;
  }
  if (month == 12) {
    y = 1;
  }

  if (month == 1 || month == 12) {
    mk = x + y + 2;
  } else {
    mk = x + y;
  }

  mkan = mk % 10;

  if (mkan == 1) {
    output = "甲";
  } else if (mkan == 2) {
    output = "乙";
  } else if (mkan == 3) {
    output = "丙";
  } else if (mkan == 4) {
    output = "丁";
  } else if (mkan == 5) {
    output = "戊";
  } else if (mkan == 6) {
    output = "己";
  } else if (mkan == 7) {
    output = "庚";
  } else if (mkan == 8) {
    output = "辛";
  } else if (mkan == 9) {
    output = "壬";
  } else if (mkan == 10 || mkan == 0) {
    output = "癸";
  }

  //月の支

  if (month == 1) {
    output = output + "丑";
  } else if (month == 2) {
    output = output + "寅";
  } else if (month == 3) {
    output = output + "卯";
  } else if (month == 4) {
    output = output + "辰";
  } else if (month == 5) {
    output = output + "巳";
  } else if (month == 6) {
    output = output + "午";
  } else if (month == 7) {
    output = output + "未";
  } else if (month == 8) {
    output = output + "申";
  } else if (month == 9) {
    output = output + "酉";
  } else if (month == 10) {
    output = output + "戌";
  } else if (month == 11) {
    output = output + "亥";
  } else if (month == 12) {
    output = output + "子";
  }

  msg2.innerText = output;

  var daiungetusi = [
    "甲子",
    "乙丑",
    "丙寅",
    "丁卯",
    "戊辰",
    "己巳",
    "庚午",
    "辛未",
    "壬申",
    "癸酉",
    "甲戌",
    "乙亥",
    "丙子",
    "丁丑",
    "戊寅",
    "己卯",
    "庚辰",
    "辛巳",
    "壬午",
    "癸未",
    "甲申",
    "乙酉",
    "丙戌",
    "丁亥",
    "戊子",
    "己丑",
    "庚寅",
    "辛卯",
    "壬辰",
    "癸巳",
    "甲午",
    "乙未",
    "丙申",
    "丁酉",
    "戊戌",
    "己亥",
    "庚子",
    "辛丑",
    "壬寅",
    "癸卯",
    "甲辰",
    "乙巳",
    "丙午",
    "丁未",
    "戊申",
    "己酉",
    "庚戌",
    "辛亥",
    "壬子",
    "癸丑",
    "甲寅",
    "乙卯",
    "丙辰",
    "丁巳",
    "戊午",
    "己未",
    "庚申",
    "辛酉",
    "壬戌",
    "癸亥",
    "甲子",
    "乙丑",
    "丙寅",
    "丁卯",
    "戊辰",
    "己巳",
    "庚午",
    "辛未",
    "壬申",
    "癸酉",
    "甲戌",
    "乙亥",
    "丙子",
    "丁丑",
    "戊寅",
    "己卯",
    "庚辰",
    "辛巳",
    "壬午",
    "癸未",
    "甲申",
    "乙酉",
    "丙戌",
    "丁亥",
    "戊子",
    "己丑",
    "庚寅",
    "辛卯",
    "壬辰",
    "癸巳",
    "甲午",
    "乙未",
    "丙申",
    "丁酉",
    "戊戌",
    "己亥",
    "庚子",
    "辛丑",
    "壬寅",
    "癸卯",
    "甲辰",
    "乙巳",
    "丙午",
    "丁未",
    "戊申",
    "己酉",
    "庚戌",
    "辛亥",
    "壬子",
    "癸丑",
    "甲寅",
    "乙卯",
    "丙辰",
    "丁巳",
    "戊午",
    "己未",
    "庚申",
    "辛酉",
    "壬戌",
    "癸亥",
  ];

  for (let i = 0; i < daiungetusi.length; i++) {
    if (msgdaiun.innerText == ma1daiun && msg2.innerText == daiungetusi[i]) {
      output = daiungetusi[i + 1];
      msgdaiun.innerText = ma1daiun + output;
      output = daiungetusi[i + 2];
      msgdaiun1.innerText = ma1daiun + 10 + output;
      output = daiungetusi[i + 3];
      msgdaiun2.innerText = ma1daiun + 20 + output;
      output = daiungetusi[i + 4];
      msgdaiun3.innerText = ma1daiun + 30 + output;
      output = daiungetusi[i + 5];
      msgdaiun4.innerText = ma1daiun + 40 + output;
      output = daiungetusi[i + 6];
      msgdaiun5.innerText = ma1daiun + 50 + output;
      output = daiungetusi[i + 7];
      msgdaiun6.innerText = ma1daiun + 60 + output;
    }
  }

  for (let i = 120; i > 0; i--) {
    if (msgdaiun.innerText == ma2daiun && msg2.innerText == daiungetusi[i]) {
      output = daiungetusi[i - 1];
      msgdaiun.innerText = ma2daiun + output;
      output = daiungetusi[i - 2];
      msgdaiun1.innerText = ma2daiun + 10 + output;
      output = daiungetusi[i - 3];
      msgdaiun2.innerText = ma2daiun + 20 + output;
      output = daiungetusi[i - 4];
      msgdaiun3.innerText = ma2daiun + 30 + output;
      output = daiungetusi[i - 5];
      msgdaiun4.innerText = ma2daiun + 40 + output;
      output = daiungetusi[i - 6];
      msgdaiun5.innerText = ma2daiun + 50 + output;
      output = daiungetusi[i - 7];
      msgdaiun6.innerText = ma2daiun + 60 + output;
    }
  }

  //日の干の計算
  year = document.getElementById("year").value; //年のリセット

  //計算式１
  let hiamari = 0;
  let hiamari2 = 0;

  hiamari = Number(year) % 4;
  if (str == "syowa") {
    hiamari = (Number(year) + 62) % 4;
  } else if (str == "heisei") {
    hiamari = (Number(year) + 125) % 4;
  } else if (str == "reiwa") {
    hiamari = (Number(year) + 155) % 4;
  }

  hiamari2 = Number(year) / 4;
  if (str == "syowa") {
    hiamari2 = (Number(year) + 62) / 4;
  } else if (str == "heisei") {
    hiamari2 = (Number(year) + 125) / 4;
  } else if (str == "reiwa") {
    hiamari2 = (Number(year) + 155) / 4;
  }

  if (hiamari > 1) {
    hiamari2 = Math.ceil(hiamari2);
  } else {
    hiamari2 = Math.floor(hiamari2);
  }

  //計算式２
  let keisan2 = 0;
  keisan2 = (Number(year) % 12) * 5;
  if (str == "syowa") {
    keisan2 = ((Number(year) + 62 - 1) % 12) * 5;
  } else if (str == "heisei") {
    keisan2 = ((Number(year) + 125 - 1) % 12) * 5;
  } else if (str == "reiwa") {
    keisan2 = ((Number(year) + 155 - 1) % 12) * 5;
  }

  //計算式３：誕生日までの日数

  if (str == "syowa") {
    year = Number(year) + 1925;
  } else if (str == "heisei") {
    year = Number(year) + 1988;
  } else if (str == "reiwa") {
    year = Number(year) + 2018;
  }

  month = document.getElementById("month").value;

  date = new Date(year, month - 1, day);
  distDate = new Date(year, 0);

  var diffMilliSec = date - distDate;

  var diffDays = parseInt(diffMilliSec / 1000 / 60 / 60 / 24);

  bdays = diffDays + 1;

  //サマータイム調整
  if (
    new Date(-683719200000) <= date.getTime() &&
    date.getTime() < new Date(-672310800000)
  ) {
    bdays = bdays + 1;
  } else if (
    new Date(-654688800000) <= date.getTime() &&
    date.getTime() < new Date(-640861200000)
  ) {
    bdays = bdays + 1;
  } else if (
    new Date(-620215200000) <= date.getTime() &&
    date.getTime() < new Date(-609411600000)
  ) {
    bdays = bdays + 1;
  } else if (
    new Date(-588765600000) <= date.getTime() &&
    date.getTime() < new Date(-577962000000)
  ) {
    bdays = bdays + 1;
  }

  nikan = (hiamari2 + keisan2 + bdays) % 10;

  if (nikan == 1) {
    output = "甲";
  } else if (nikan == 2) {
    output = "乙";
  } else if (nikan == 3) {
    output = "丙";
  } else if (nikan == 4) {
    output = "丁";
  } else if (nikan == 5) {
    output = "戊";
  } else if (nikan == 6) {
    output = "己";
  } else if (nikan == 7) {
    output = "庚";
  } else if (nikan == 8) {
    output = "辛";
  } else if (nikan == 9) {
    output = "壬";
  } else if (nikan == 10 || nikan == 0) {
    output = "癸";
  }

  //日支の計算
  let nissi = (hiamari2 + keisan2 + bdays) % 12;

  if (nissi == 1) {
    output = output + "子";
  } else if (nissi == 2) {
    output = output + "丑";
  } else if (nissi == 3) {
    output = output + "寅";
  } else if (nissi == 4) {
    output = output + "卯";
  } else if (nissi == 5) {
    output = output + "辰";
  } else if (nissi == 6) {
    output = output + "巳";
  } else if (nissi == 7) {
    output = output + "午";
  } else if (nissi == 8) {
    output = output + "未";
  } else if (nissi == 9) {
    output = output + "申";
  } else if (nissi == 10) {
    output = output + "酉";
  } else if (nissi == 11) {
    output = output + "戌";
  } else if (nissi == 12 || nissi == 0) {
    output = output + "亥";
  }

  msg3.innerText = output;

  //時干の計算
  if (nikan == 1 || nikan == 6) {
    zi = 0;
  } else if (nikan == 2 || nikan == 7) {
    zi = 2;
  }
  if (nikan == 3 || nikan == 8) {
    zi = 4;
  }
  if (nikan == 4 || nikan == 9) {
    zi = 6;
  }
  if (nikan == 5 || nikan == 10 || nikan == 0) {
    zi = 8;
  }

  //支の時間
  var now_hour = hour;
  let sizi = 0;
  if (23 <= now_hour && now_hour <= 24) {
    sizi = 1;
  } else if (0 <= now_hour && now_hour < 1) {
    sizi = 1;
  } else if (1 <= now_hour && now_hour < 3) {
    sizi = 2;
  } else if (3 <= now_hour && now_hour < 5) {
    sizi = 3;
  } else if (5 <= now_hour && now_hour < 7) {
    sizi = 4;
  } else if (7 <= now_hour && now_hour < 9) {
    sizi = 5;
  } else if (9 <= now_hour && now_hour < 11) {
    sizi = 6;
  } else if (11 <= now_hour && now_hour < 13) {
    sizi = 7;
  } else if (13 <= now_hour && now_hour < 15) {
    sizi = 8;
  } else if (15 <= now_hour && now_hour < 17) {
    sizi = 9;
  } else if (17 <= now_hour && now_hour < 19) {
    sizi = 10;
  } else if (19 <= now_hour && now_hour < 21) {
    sizi = 11;
  } else if (21 <= now_hour && now_hour < 23) {
    sizi = 12;
  }

  let zikan = (zi + sizi) % 10;
  if (23 <= now_hour && now_hour < 24) {
    zikan = (zi + sizi + 2) % 10;
  }

  if (zikan == 1) {
    output = "甲";
  } else if (zikan == 2) {
    output = "乙";
  } else if (zikan == 3) {
    output = "丙";
  } else if (zikan == 4) {
    output = "丁";
  } else if (zikan == 5) {
    output = "戊";
  } else if (zikan == 6) {
    output = "己";
  } else if (zikan == 7) {
    output = "庚";
  } else if (zikan == 8) {
    output = "辛";
  } else if (zikan == 9) {
    output = "壬";
  } else if (zikan == 10 || zikan == 0) {
    output = "癸";
  }

  if (23 <= now_hour && now_hour <= 24) {
    output = output + "子";
  } else if (0 <= now_hour && now_hour < 1) {
    output = output + "子";
  } else if (1 <= now_hour && now_hour < 3) {
    output = output + "丑";
  } else if (3 <= now_hour && now_hour < 5) {
    output = output + "寅";
  } else if (5 <= now_hour && now_hour < 7) {
    output = output + "卯";
  } else if (7 <= now_hour && now_hour < 9) {
    output = output + "辰";
  } else if (9 <= now_hour && now_hour < 11) {
    output = output + "巳";
  } else if (11 <= now_hour && now_hour < 13) {
    output = output + "午";
  } else if (13 <= now_hour && now_hour < 15) {
    output = output + "未";
  } else if (15 <= now_hour && now_hour < 17) {
    output = output + "申";
  } else if (17 <= now_hour && now_hour < 19) {
    output = output + "酉";
  } else if (19 <= now_hour && now_hour < 21) {
    output = output + "戌";
  } else if (21 <= now_hour && now_hour < 23) {
    output = output + "亥";
  }

  msg4.innerText = output;
}

let meisiki = document.getElementById("meisiki");
meisiki.addEventListener("click", butotnClick);

// データをリセットする関数
document.getElementById("resetButton").addEventListener("click", function () {
  document.getElementById("msg").textContent = "";
  document.getElementById("msg2").textContent = "";
  document.getElementById("msg3").textContent = "";
  document.getElementById("msg4").textContent = "";
  document.getElementById("msg5").textContent = "";
  document.getElementById("msgdaiun").textContent = "";
  document.getElementById("msgdaiun1").textContent = "";
  document.getElementById("msgdaiun2").textContent = "";
  document.getElementById("msgdaiun3").textContent = "";
  document.getElementById("msgdaiun4").textContent = "";
  document.getElementById("msgdaiun5").textContent = "";
  document.getElementById("msgdaiun6").textContent = "";
});
