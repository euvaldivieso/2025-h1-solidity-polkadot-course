export const ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_initialSupply",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export const BYTECODE = "50564d00002633000000000000010700c14000c000400480ac0a000000000e0000001c0000002a000000300000003b0000004a00000055000000670000007200000063616c6c5f646174615f636f707963616c6c5f646174615f6c6f616463616c6c5f646174615f73697a6563616c6c65726765745f73746f72616765686173685f6b656363616b5f3235367365616c5f72657475726e7365745f696d6d757461626c655f646174617365745f73746f7261676576616c75655f7472616e73666572726564051102abd30463616c6cabdb066465706c6f7906b24a7102abe75d0076007b009f002f01a5015b029602c402e002f2020c039a03e303e803ed031b044e045304680450059205bd05e605f80533068d06ba06170745076d07b108c308460a610a770ae30a770bb70b670cab0cc40cda0c260d3c0d1d103810a110ec10c511e511d513f0130b142114a3149b15a615ea1503161916271742175917a017bc1722189c18e918c319db19011a7f1ac31acf1a141b2e1b451bda1cf61c121d291d721db31de41d861ee21e231f9d1fea1fc420db20f220012118213021ef22a5242625d126e726fc262927532766270828be29502b652b922bbc2bdb2be42b64798b7a103307520a41330a000001ac8a39c8980883871f8477e054370000010a330732003908000002ae78143d0700000264783307200002c8870732003307200002c88707320032009511f07b10087b1584750133073308501002a73e070800020a02013e071000023b05200003510507501004095010067c02951140fe7b10b8017b15b0017b16a8019515c0018411e0641633074033082050100866ff510744023308080002210358000221035000022103480002140700000000000000807b68503e076000029517e08477e07b67586471491718491710491708490783770a0901826a5882a71082a81882a90882aad49808d4a707d487075207dc019567c00033000a951170ff7b1088007b1580007b1678951590008411f039061000027b1733074033082033003828d4fe8267c0007b67588267c8007b67488267d0007b67408267d8007b67388367e0000a038267e8008168f0008269e0006f77977a206f88988820d48a0a9877206f98978920d4970798882049167849269800492690004926880049268000017b68707b67689567a000956880009569607b6a6050100c891b826ab8007b6a188269b0007b69208268a8007b68288267a0007b67307b6a78017b6970017b6868017b6760014926580149265001492648014926400149263001492638014926280149262001000183686001836a4001836b20013309ff33070a048267187b6798018267207b6790018267287b6788018267307b6780018267387b6718018267407b6710018267487b6708018267587b67000183688001836a00013309ff330b2033070a0833074033082050100eaafd51078800826a5082a74882a85882a94082aa506f7b6f87d4b708d4a9096f99d49808988820d4b909979920d4980852085a83777b67585010106ffd51074d826750826858be8707330833090a01390814000251080d330740000383770a0701826758330850101241fd51071f826750826858be7808330733090a06013307330850101425fd5207040081685033070133093300160a06019511c07b10387b15309515408411e0330740330820501018f9fc52070400210358000221035000023908100002140900000000000000803e096000022103480002541803b000831733080a010181171c3308001016185a47dc0d1618525147bb9c05a9990051473eed62ddc4005247b3a75e09840033001a951180fd7b1078027b1570027b166802951580028411e049219801492190014921880149218001831780010a0928f8068388ddfdaa874f5147dd72b823ad0052473182a0703a33001c9511c0fe7b1038017b1530017b162801951540018411e04921b8004921b0004921a8004921a0008317a0000a0928911350101e0f1d5010201916330022951120ff7b10d8007b15d0007b16c8009515e0008411e04911584911504911484911408317400a0928db0b3300249511e0fd7b1018027b1510027b160802951520028411e049219801492190014921880149218001831780010a0928e619501026d30f9511f07b10087b1564753307403308205010289dfb5107343a086000023a095800023a0a5000023a074800026f886f996faa6f777b57187b5a107b59087b5882100882159511103200009511d87b10207b15187b16108273188274108279088270828c828218828508828a1095c61fd8c60bc8b507d85705dabb05c85a08d8a80a8466e07b1008c86000d86006c8970bc86b0cd37c0bd87c05dab605c8480bc8b505d8b506d88b07c83202c8a208c88707c876068e678e58db6708d465078ecbdb780b520b72821708d87007d39c08d89c09da8709d84507d33608d8360ada870ad34507d48707da790a520a4b7b1c7b100833074033082050102ab5fa510799006f6733080800026f59821a6faa821b086fbb3e0b6000023e0a5800023e095000023e074800028210208215188216109511283200330820330750102c73fa510757330508000221032000022103180002210310000221030800024e487b7133070433082050102e48fa51072c4815200000004148151c48151848151448151048150c48150848150433082433075010301ffa5207040083583307013309243300320a0601951160ff7b1098007b1590007b1688009515a0008411f08289187b19388289107b19208289087b192882887b18306476330740330820501034d2f9510786003a086000023a095800023a0a5000023a074800026f887b18186f997b19106faa7b1a086f7b7b1b8217207b17508217287b17488217307b17407b1b787b1a707b19687b18609517609518408219387b195850103615fe82177b67188217087b67108217107b67088217187b67955160ff8210980082159000821688009511a0003200005107fa01330b0800027b16289767209877203a086000023a095800023a0a5000027b1b203a0b4800026f8c7b1c086f987b18106fa66fb97b19184911484911404911387b17307b19687b16607b18589517509518307b1c5050103a8bfd821908821718821810d48707d46908d47808988820d46707977720d4870752077f018396646782182850103cc0f851076f018217207b1618be6707821628646833090a0154161f4d01330820821618646750103e98f851074701821720c876067c67017c687c69027c6a03977708d4870797991097aa18d4a909d497077c68057c69047c6a067c6b07978808d4980897aa1097bb18d4ba0ad4a808978820d478027c68097c69087c6a0a7c6b0b978808d4980897aa1097bb18d4ba0ad4a8087c690d7c6a0c7c6b0e7c6c0f979908d4a90997bb1097cc18d4cb0bd4b909979920d498087c69117c6a107c6b127c6c13979908d4a90997bb1097cc18d4cb0bd4b9097c6a157c6b147c6c167c671797aa08d4ba0a97cc10977718d4c707d4a707977720d479097c67197c6a187c6b1a7c6c1b977708d4a70797bb1097cc18d4cb0bd4b7077c6a1d7c6b1c7c6c1e7c661f97aa08d4ba0a97cc10976618d46c0cd4ca0a97aa20d4a7076f776f996f886f2a821b7bba187bb8107bb9087bb7955170ff82108800821580008216789511900032003307330850104054f75207040081182033070133093300420a0601828918828a10828b0882887b79187b7a107b7b087b7832009511807b10787b15707b1668951580008411e0828010828c08829a088283829b7b1b28829410d3ca02d8ca06d83b0b7b1b20da2b068282188298187b1818c90409c969087b1830d86908d8040b7b1238821918c92909c9b909c98909c9ca08821a20c9a808821a28c93a0a8e8b88aa4085aa01db8b0a8f968218308e8bdb960bd49808db8b0a510adc006476d403077b1c30821838d4c808d487079877207b1028d40808978820d487075207df007b132083388317407b18180a0101821a50821b5814070000000001000000d37a08d4b80898a92088990194b993895109a1007b1b087b1a10821828821938d498081407e0ffffff00000000821920d8790782193094979487510783008217487b17308217407b17388217188378208317400a01821758821850821948821a407b67387b68307b69287b6a208217087b67188217107b67108217307b67088217387b6795518082107882157082166895118000320033073308501044bff551071e3308080002838833070133090a060133073308501046a4f5520704003308080002838833070133093300480a0601828918828a10828b0882887b79187b7a107b7b087b783200821790018218980182198801821a8001d49808d4a707d487075207130238071000024921180149211001492108017b170001492138014921300149212001049517400195182001951900014921280150104afdfd821760017b1738821768017b1730821770017b1728821778017b1720821740017b1718821748017b1710821750017b1708821658018317a0010a038217a8018118b0018219a0016f77977a206f88988820d48a0a9877206f98978920d497079888204921b8004921d8004921d0004921c8004921c000027b18b0007b17a8009517e0009518c0009519a0007b1aa00050104cb711821ae0008217e8008218f0008219f8007b1658821b087b1b50821b107b1b48821b187b1b407b19787b18707b1768951780009518609519407b1a6050104e7711821998007b1908821890007b1810821788007b1718821680007b1938027b1830027b1728027b162002492118024921100249210802492100024921f0014921f8014921e8014921e001000183182002831a0002831be0013309ff33070a048217087b1758028217107b1750028217187b1748027b1640028217207b17d8018217287b17d0018217307b17c8018217387b17c00183184002831ac0013309ff330b2033070a083307403308205010509ef351076033060800023a075000023a086000023a094800023a0a5800026f7b6f87d4b708d4a9096f99d49808988820d4b909979920d4980852082983777b17385010525af351071c821838be6808330733090a06013307330850105441f3520704003308080002838833070133093300560a06019511f87b10827218828318827b10827c088289088274828a828810d3c907d8c909d84a0adb790ac9b807d8a707d8b808c92309c98909c9790957090a8210951108320033073308501058dff25207040033080800028388330701330933005a0a06019511a07b10587b15507b16487b1782828293829708829a10828b188285108299188288088eb48e56dbb4068e80882c000185c401db8004d45b0bdbb60446114746114646114546114446114346114246114146114046113f46113e46113d46113c46113b46113a46113946113846113746113646113546113446113346113246113146113046112f46112e46112d46112c46112b46112a461129461128781920781a1878171078130898983878182798983078182698982878182598982078182498981878182398981078182298990878192198a83878181f98a83078181e98a82878181d98a82078181c98a81878181b98a81078181a98aa08781a1998783878181798783078181698782878181598782078181498781878181398781078181298770878171198373878170f98373078170e98372878170d98372078170c98371878170b98371078170a98370878170997273898773b951908c879097c97117c98107c9a127c9b13977708d4870797aa1097bb18d4ba0ad4a7077c98157c9a147c9b167c9c17978808d4a80897bb1097cc18d4cb0bd4b808978820d47800842a07d0a0087c97197c9b187c961a7c951b977708d4b707976610975518d46505d457077c9b1d7c961c7c951e7c9c1f97bb08d46b0b97551097cc18d45c0cd4cb0b97bb20d47b0297270185a33fcf370bd48b0b7c97097c98087c9c0a7c950b977708d4870797cc10975518d45c0cd4c7077c980d7c9c0c7c950e7c960f978808d4c808975510976618d46505d45808978820d47808d0a80797000185acffcfc00cd4c7007c97017c957c96027c9c03977708d4570797661097cc18d46c0cd4c7077c9c057c95047c96067c990797cc08d45c0c976610979918d46909d4c909979920d49707d0a707978801cf3808d48707d0a20894479440944b944882197b98187b9b107b90087b978210588215508216489511603200821750821858821948821a40d49808d4a707d4870752072739071000025617032d3307330850105ce8ef51071f3308080002838833070133090a06013307330850105ecdef52079b01004921b8004921b0004921a8004921a0004921980049219000492188004921800049117049117849116849116000018318a000831a8000831b603309ff33070a04821798007b1728821790007b1730821788007b17388216800033074033082050106064ef51079b7b162033060800023a075000023a086000023a094800023a0a5800026f7b6f87d4b708d4a9096f99d49808988820d4b909979920d49808520861ff83773308207b171850106219ef510750ff821718c876068218286f8c8218306f888219386f99821a206faa786a1898ab38786b1f98ab30786b1e98ab28786b1d98ab20786b1c98ab18786b1b98ab10786b1a98aa08786a19786910989a38786a17989a30786a16989a28786a15989a20786a14989a18786a13989a10786a1298990878691178680898893878690f98893078690e98892878690d98892078690c98891878690b98891078690a988808786809786c98c83878680798c83078680698c82878680598c82078680498c81878680398c81078680298cc08786c0133082050106440ee510777fe836833092033070a06013308080002838833070133093300660a0601951160ff7b1098007b1590007b1688009515a0008411e0828010828408829208828c7b1c58829a7b1a40829b10d34203d84206d8ca0ada3a06828318829c18c90b09c969087b1848d86908d80b0b7b1350c93c09821c58c9b909c98909c94208c9a808821a40c9ca0a8e8b88aa6085aa01db8b0a8f968218488e8bdb960bd49808db8b0a510a63016476d40c077b1448821850d48408d487079877207b1038d40808978820d487075207810183c88317607b18400a0101821a70821b7814070000000001000000d37a08d4b80898a92088990194b9938951092b017b1b287b1a30821b388eb8821c508ec9dac8091407dfffffff00000000821858d88707821a488ea8daa708d4cb0b7b1b50dbb90852081a018217687b17208217607b17388217408378208317600a0101821a70821b7814070000000001000000d37a08d4b80898a92088990194b993895109d2007b1b107b1a181407c0ffffff00000000821858d87807821848948782185094875107ba008217687b17508217607b17588217408378408317600a01821778821870821968821a607b67587b68507b69487b6a408217107b67388217187b67308217507b67288217587b67208217287b67188217307b67108217207b67088217387b67955160ff8210980082159000821688009511a00032003307330850106830ec5107393308080002838833070133090a06013307330850106a15ec51071e3308080002838833070133090a06013307330850106cfaeb5207040033080800028388330701330933006e0a06019511a0fe7b1058017b1550017b164801951560018411e049213801492130014921280149212001831720010a0901821730018218380182192801821a2001d49808d4a707d487075207920138071000024921980049219000492188007b1780004921b8004921b0004921a000049517c0009518a000951980004921a80050107047fd8217c0007b17188213c8008214d0008210d8008212e000821ce8008216f000821bf800821a00018218080182191001821718017b17387b19307b18287b1a207b1b587b16507b1c487b12407b10787b14707b1368951760951840951920821a187b1a60330072951100fd7b10f8027b15f0027b16e802951500038411e0828a187b1a48828a107b1a50828a087b1a5882887b186082987b1898008298087b1890008298107b188800829618827a8278088279108277184921f8014921f0014921e801330b017b1be0017b17107b17d8017b19187b19d0017b18207b18c801951700029518e0019519c0017b1a287b1ac0013300c0002891073307403308205010745fea51076033060800023a075000023a086000023a094800023a0a5800026f7b6f87d4b708d4a9096f99d49808988820d4b909979920d4980852082983777b17185010761bea51071c821818be6808330733090a06013307330850107802ea5207040033080800028388330701330933007a0a06019511807b10787b15707b1668951580008411e0828410828c0882920882867b1618829b7b1b20829010d3c20a7b1a38d8c20ad86b0b821338da3b0a64b38288187b18388298187b1828c94008c9a8097b1930d8a8097b1410d8400a821838821b28c98b08c9a808c99804c9c206c93609821218821820c9280a8e9b88aa2085aa01db9b0a8f498218308e8bdb490bd44808db8b0a510a716476821910d49207821838d4c808d48707987720d49808978820d4870752077883288317400a010182175082185814090000000001000000d37909d48909987a2088aa01948a939a510a41821948821a407b69087b6a7b67107b68189551808210788215708216689511800032003307330850107cdee851071e3308080002838833070133090a06013307330850107ec3e852070400330808000283883307013309330080000a0601828918828a10828b0882887b79187b7a107b7b087b7832008217b0008218b8008219a800821aa000d49808d4a707d4870752072839071000025617232f330733085020820066e85107203308080002838833070133090a060133073308502084004ae85207320200831700013308040a010182171001821a180114090000000001000000d37909d4a909987b2088bb0194ab939b510be40182190801821b00017b19487b1b40491178491170491168491160017b1750951780009518609519407b1a58502086000d05821798008218900082198800821a80007b1718017b1810017b1908017b1a00014921f8004921f0004921e8004921e0004921d0004921d8004921c8004921c000000183180001831ae000831bc0003309ff33070a048217f8007b17288217f0007b17308217e8007b17388216e000330740330820502088006ae7510724ff7b162033060800023a075000023a086000023a094800023a0a5800026f7b6f87d4b708d4a9096f99d49808988820d4b909979920d498085208e9fe83773308207b171850208a001de75107d7fe821718c876068218286f8c8218306f888219386f99821a206faa786a1898ab38786b1f98ab30786b1e98ab28786b1d98ab20786b1c98ab18786b1b98ab10786b1a98aa08786a19786910989a38786a17989a30786a16989a28786a15989a20786a14989a18786a13989a10786a1298990878691178680898893878690f98893078690e98892878690d98892078690c98891878690b98891078690a988808786809786c98c83878680798c83078680698c82878680598c82078680498c81878680398c81078680298cc08786c0133082050208c0043e65107fdfd836833092033070a06013307330850208e002be65107e5fd3308080002838833070133090a0601330808000283883307013309330090000a06019511e0fe7b1018017b1510017b160801951520018411e04921f8004921f0004921e8004921e0008317e0000a09018217f0008218f8008219e800821ae000d49808d4a707d487075207dc0038071000024911784911704911687b1760492198004921900049218000049517a00095188000951960492188005020920062ee8212a0008217a8008218b000821ab800821bc000821cc8008216d0008219d8007b19387b16307b1c287b1b207b1a587b18507b17489517409518207b124050209400a90c3307403308205020960037e551076233060800023a075000023a086000023a094800023a0a5800026f7b6f87d4b708d4a9096f99d49808988820d4b909979920d4980852082b83777b171850209800f2e451071d821818be6808330733090a06013307330850209a00d8e45207040033080800028388330701330933009c000a06019511807b10787b15707b1668951580008411e0828410828c08829a088283829b7b1b28829010d3ca02d8ca06d83b0b7b1b20da2b068282188298187b1818c94009c969087b1830d86908d8400b7b1238821918c92909c9b909c98909c9ca08821a20c9a808821a28c93a0a8e8b88aa4085aa01db8b0a8f968218308e8bdb960bd49808db8b0a510a05016476d443077b1c28821838d4c808d487079877207b1430d44808978820d48707520726017b132083388317407b18180a0101821b50821a5814070000000001000000d37b08d4a80898b92088990194a993895109cb007b1b087b1a10821a308ea8821c388ec9dac8091407dfffffff00000000821820d88707821b288eb8dab708d4ca07db79085208bf008217487b17308217407b17388217188378208317400a010182185082175814090000000001000000d38909d47909988a2088aa01947a939a510a76821948821a407b69287b6a208219307b69088219387b697b68308218087b68107b67388217107b67189551808210788215708216689511800032003307330850209e002ce351073b3308080002838833070133090a0601330733085020a00010e351071f3308080002838833070133090a0601330733085020a200f4e2520704003308080002838833070133093300a4000a06019511a07b10587b15507b16489515608411e06416829a107b6a28829a087b6a3082997b69388289187b69088289107b69108289087b691882887b68207b6733082033075020a60094e25107be00826728977720987720330a0800026f778268306f888269386f9921030800023e092000023e081800027b6a383e071000023307203308205020a80053e251077d8267086f778268106f888269186f99826a206faa826b387bba387bb9307bb8287bb72033084033075020aa0022e251074c9517e08479e07b6930649181673883993308400a05826a3082a71882a81082a90882aa6f776f886f996faa826b7bba187bb9107bb8087bb79551a0821058821550821648951160320000821790018218980182198801821a8001d49808d4a707d487075207870238071000024921180149211001492108017b17000149213801492130014921200104951740019518200195190001492128015020ac00c5fc821760017b1738821768017b1730821770017b172882167801821740018218480182195001821a58017b1ab8007b19b0007b18a8007b17a0004921d8004921d0004921c8009517e0009518c0009519a0004921c000025020ae004dfe821ae0008217e8008218f0008219f8007b1658821b287b1b50821b307b1b48821b387b1b407b19787b18707b1768951780009518609519407b1a605020b0000cfe821798008218900082198800821a80007b17f8017b18f0017b19e8017b1ae0014921d8014921d0014921c8014921c0014921b0014921b8014921a8014921a00100018318e001831ac001831ba0013309ff33070a048217d8017b17288217d0017b17308217c8017b17388216c0013307403308205020b20069e0510741017b162033060800023a075000023a086000023a094800023a0a5800026f7b6f87d4b708d4a9096f99d49808988820d4b909979920d498085208060183773308207b17185020b4001ce05107f400821718c876068218286f8c8218306f888219386f99821a206faa786a1898ab38786b1f98ab30786b1e98ab28786b1d98ab20786b1c98ab18786b1b98ab10786b1a98aa08786a19786910989a38786a17989a30786a16989a28786a15989a20786a14989a18786a13989a10786a1298990878691178680898893878690f98893078690e98892878690d98892078690c98891878690b98891078690a988808786809786c98c83878680798c83078680698c82878680598c82078680498c81878680398c81078680298cc08786c013308205020b60042df51071a836833092033070a0601330733085020b8002bdf520704003308080002838833070133093300ba000a06019511f87b10330733085020bc0005df520704003308080002838833070133093300be000a0601828918828a10828b0882887b79187b7a107b7b087b783200821a18028219100282180802821700027b1a407b1ad8027b19687b19d0027b18707b18c8027b17787b17c0024921b8024921b0024921a8024921a0024921900249219802492188024921800200018318c002831aa002831b80023309ff33070a04018213b802821ab0028212a8028219a002d363077b168000d8630b821c8800d8ca087b1830da780b82189000d38204d88206821898007b1938d88900da4006d3ac0cd4c707da760b520bed0482178800c97a07c967087b1808d86707821a8000c9a309821830c98909c979097b193082179000c97207c907077b1782179800821838c978077b17388217707b17a8028217787b17a0028217687b17b0028216407b16b802492198024921900249218802492180024921700249217802492168024921600200018318a002831a8002831b60023309ff33070a047b16d8028217687b17d0028217707b17c8028217787b17c0028217307b1758028217087b17500282177b1748028217387b1740028318c002831a40023309ff330b2033070a088217487b1778018217507b1770018217587b1768018217607b1760014921980149219001492188019517a001951880019519600149218001015020c20040fa821ab8018219b0018218a8018217a0017b1a607b1ad8027b19687b19d0027b18707b18c8027b17787b17c0024921b8024921b0024921a8024921a0024921900249219802492188024921800200018318c002831aa002831b80023309ff33070a0401821ba8028219a0028213b8028216b002821c9000c8bc0c82189800c898087b1858d8980ac8ac0cd3bc027b1c50d8bc0b821c8800c86c0c82188000c83808d86c09c8980864a9db2b09c89c07d8c709c8980c85a80185b901db2908d86709d33c0a7b1c40d83c0bdaa90b7b1748d36707d4a70785b901db7908510812038217707b17a8028217787b17a0028217687b17b0028216607b16b802492198024921900249218802492180024921700249217802492168024921600200018318a002831a8002831b60023309ff33070a047b16d8028217687b17d0028217707b17c8028217787b17c0028217407b1758028217487b1750028217507b1748028217587b1740028318c002831a40023309ff330b2033070a088217107b1718018217187b1710018217207b1708018217287b17000149213801492130014921280195174001951820019519000149212001025020c4008af8821740017b1778821748017b1770821750017b176882165801831720020a038217280281183002821920026f77977a206f88988820d48a0a9877206f98978920d497079888204921b8007b16d8008219687b19d0008219707b19c8008219787b19c0007b18b0007b17a8009517e0009518c0009519a0007b1aa0005020c60009f8821af8008219f0008218e8008217e0007b1a607b1ad8027b19687b19d0027b18707b18c8027b17787b17c0024921b8024921b0024921a8024921a0024921900249219802492188024921800200018318c002831aa002831b80023309ff33070a04018219b802821ab0028213a8028218a002821b8000d3b907d8b90b82128800d82a0c7b1c50da7c0b821c9000d3c304d8c306821c98007b1858d8c800da4006d32a0cd4c707da760b520b220182178800c97a07c9670a7b1a8800d86707821a8000c9a909821850c98909c979097b19800082179000c97307c907077b17900082179800821858c978077b1798004921600200018217707b17a8028217787b17a0028217687b17b0028216607b16b802492198024921900249218802492180024921700249217802492168028318a002831a8002831b60023309ff33070a047b16d8028217687b17d0028217707b17c8028217787b17c002821780007b175802821788007b175002821790007b174802821798007b1740028318c002831a40023309ff330b2033070a08955100fd8210f8028215f0028216e80295110003320033082033075020c80035d9510785003306080002282b33082033075020ca001fd951076f3306080002281633082033075020cc000ad951075a33060800020121032000022103180002210310000221030800024e487b713307043308205020ce00ddd851072d4816200000001148161c48161848161448161048160c48160848160433082433075020d000b3d85207040083683307013309243300d2000a06019511e0fd7b1018027b1510027b160802951520028411e08279187b19288279107b19308279087b193882777b174082877b17788287087b17708287107b1768828618831740010a038217480181185001821940016f77977a206f88988820d48a0a9877206f98978920d497079888204921f80049211801492110014921080149210001017b18f0007b17e80095172001951800019519e0007b1ae0005020d40027f5821a38018219300182182801821720017b1a207b1af8017b19487b19f0017b18507b18e8017b17587b17e0014921d8014921d0014921c8014921c0014921b0014921b8014921a8014921a00100018318e001831ac001831ba0013309ff33070a04018213d801821ad0018212c8018219c001d363077b1660d8630b821c68d8ca087b1810da780b821870d38204d882068218787b1918d88900da400664c4d3ac0cd4c707da760b520b9602c94a07c967087b1808d86707821a60c9a309821810c98909c979097b1910821770c97207c907077b17821778821818c978077b17188217507b17c8018217587b17c0018217487b17d0018216207b16d8014921b8014921b0014921a8014921a0014921900149219801492188014921800100018318c001831aa001831b80013309ff33070a047b16f8018217487b17f0018217507b17e8018217587b17e0018217107b1778018217087b17700182177b1768018217187b1760018318e001831a60013309ff330b2033070a088217287b1798008217307b1790008217387b1788008217407b1780004921b8004921b0004921a8009517c0009518a000951980004921a000015020d60071f3821ad8008219d0008218c8008217c0007b1a407b1af8017b19487b19f0017b18507b18e8017b17587b17e0014921d8014921d0014921c8014921c0014921b0014921b8014921a8014921a00100018318e001831ac001831ba0013309ff33070a0401821ac8018218c0018212d8018216d001821c70c8ac0c821778c887077b1778d8870bc8bc0cd3ac037b1c70d8ac0a85bc01db3a0b821768c86707c8b708d8780b821960c82909d86707c89707c87b0bd86807d32b097b1b60d82b0bda970b85b7017b1868d3680bd4b90985aa01db3a0cdb970c510cc7008217507b17c8018217587b17c0018217487b17d0018216407b16d8014921b8014921b0014921a8014921a0014921900149219801492188014921800100018318c001831aa001831b80013309ff33070a047b16f8018217487b17f0018217507b17e8018217587b17e0018217607b1778018217687b1770018217707b1768018217787b1760018318e001831a60013309ff330b2033070a089551e0fd82101802821510028216080295112002320033082033075020d800b6d451076f3306080002281633082033075020da00a1d451075a33060800020121032000022103180002210310000221030800024e487b713307043308205020dc0074d451072d4816200000001148161c48161848161448161048160c48160848160433082433075020de004ad45207040083683307013309240a0633073300e000287ad433075020e00075d43307015020e2006cd4280ef5a58424092a2414524825a522348444888888948408218400129294a49a242589484424124a924824128922a294a42489889044242112894422222222222288885422914824128944445249882449252549524292d421a1a69024d50a9994264992902184004208d504818080804444442222a2440202898888444444092111119124494944442422224a482a09092184aa24a534499254922449922449922449924a4a9224499224250951a8520821244929248410022421812449924296a411119124494a4988104228a5549224499224a124498a8888464812424828a59224499284244992242a2192a40e49219294244992244992244992244992244992244992244992244992244992244992244955498a88441532294d52924a9248924a922449922449922449494a49a22449922452d2248024a948920490a42249929424499224494a92a84242a9153294d22425a98888241122222242444488442291482412514494929424222244444484888824499224928448241211111111111144442a91484422914844249584841042a8a424494a4852ad90a194a624492549922449a94286529a24559224952249922449922449922449922449922449922449922449922449922449922449922449922449922449922449922449922449922449922449922449922449922449922429499224499224499224552529494a9224095121a1d40a31222222224988482a1289441292104208959424899210494a2925499224499224499224499224499224494a9224499224214a0da534222292a4942449922449922449494a49a2244992244a9a04902415494a09204949124992a449004952910490a4144992a424499224499224495244445421a1d40a09a556c8504a2322221111d188882411222222424444884444444444449224499224492222224992942291484922229148242222114942420821545292242524a956c8504a932492a4942449529224499224499294a4942425499224a54900495249529224518584522b6428459394a422229224440509a55610238d0820492a22922491481244444444444444441011a94824124910092184504949922809224929a5244992244992244992244992244992244949922449922488522b88506a28452322221111d18888241192242244248288888888244992244882841042a8a424494a90a45a418652344922492a49922449922449922425292589922449924849930092a4224929012429492449922601244925499294244992441524945a4142a915642845932429494a9224a5144492504a21848424484a292549529024a594245595a4244923229244888888081111412412898888888888888810444424499224912488888888888888882022529148249220124208a192922451124492524a499224499224499224499224499224499292244992244990522bc8508aa60a3294a2494a521111894422111111114144a446442412492289244922922492249114491289442222222282884845229148248a44445289442211111111828888442291888888882022522322229124492291a424499224499244229148444444441011a948241289442211915422914844444484201289441411a5242589482412111111414444229148444444441011a91111914492482249928824124912914424112412894444444444442a1289444444444444521111510a22948284529030841020091248922429c8926844442449925292245144949294242222444444041111894422111111114144a446442449922449529248922449929424894422111111114144a42291482412452222a944229188888808414444229148444444441011a9111149922449922449922449922489442291888888882022529148241289442222a98888280509a5206108214012249024495290251529481000"