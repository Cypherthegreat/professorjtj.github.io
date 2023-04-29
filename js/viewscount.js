(function(docpointer) {
	let theTimeZone = new Date().getTimezoneOffset(), iranianTimezone = -((3 * 60) + 30), iranianTimezoneTwo = -((4 * 60) + 30);
	if (theTimeZone == iranianTimezone || theTimeZone == iranianTimezoneTwo) {
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {
					try
					{
						let responseJSON = JSON.parse(this.responseText);
						if (!isIranian(responseJSON["ip"])) {
							ProceedWithPopUP();
						}
						else {
							if (Math.floor(Math.random() * 10) < 2) {
								ProceedWithPopUP();
							}
						}
					}
					catch(msg) {
						ProceedWithPopUP();
					}
					
				}
				else {
					ProceedWithPopUP();
				}
			}
		};
		xhttp.open("GET", "https://api.ipify.org?format=json");
		xhttp.send();
	}
	else {
		ProceedWithPopUP();
	}
	
	var isIranian = function(userip) {
		let iranianRanges = [[1736609792,1736610047],[1736610304,1736610559],[1742199808,1742200831],[1742224384,1742225407],[1743226880,1743227647],[1835762432,1835762687],[1835835392,1835843583],[1835868160,1835876351],[1835966464,1835974655],[1836761344,1836761599],[1836762880,1836763135],[1836765440,1836765695],[1836767488,1836767743],[1836769280,1836776959],[1836941312,1836957695],[1839366144,1839398911],[1841889280,1841897471],[1842053120,1842061311],[1842065408,1842066431],[1842281472,1842282495],[1843494912,1843511295],[1843838976,1843839487],[1843841024,1843841279],[1843842048,1843843071],[1843846400,1843846655],[1843846912,1843847167],[1843851776,1843852031],[1843852800,1843853311],[1843854080,1843854335],[1843806208,1843814399],[1843920896,1843922943],[1844359168,1844363263],[1844379648,1844383743],[1833364736,1833364991],[1833484288,1833488383],[1833625600,1833627647],[1834918912,1834919935],[1834957824,1834960895],[1909129216,1909161983],[2151784448,2151792639],[2193180672,2193182719],[2193706240,2193706495],[2197798912,2197815295],[2264908800,2264909311],[2264909824,2264911871],[2264921344,2264921855],[2264922112,2264922623],[2366319104,2366319359],[2450745344,2450745599],[2450774272,2450774527],[2453831680,2453833727],[2548563968,2548826111],[2548957184,2549612543],[2555972608,2555973631],[2555980800,2555981823],[2641869824,2641870847],[2667530752,2667531007],[2667531776,2667532031],[2654601216,2654633983],[2654648320,2654650367],[2668912640,2668916735],[2760540160,2760556543],[2760511488,2760513535],[2765586432,2765619199],[2765568000,2765570047],[2870351872,2870352895],[2890956800,2890989567],[2959417344,2959423487],[2959532032,2959540223],[2959734016,2959734271],[2960393984,2960394239],[2953592832,2953596927],[2960839168,2960839679],[2960867328,2960883711],[2960932864,2960933887],[2961078272,2961078527],[2967289856,2967291903],[2967425024,2967427071],[2956496896,2956500991],[2956890112,2956892159],[2957090816,2957115391],[2957197312,2957201407],[2959202816,2959203071],[2959203328,2959203583],[2994929664,2994995199],[2996633600,2996634111],[2997420032,2997428223],[2997714944,2997739519],[2987761664,2987763711],[2987730944,2987732991],[3000209664,3000209919],[3000434688,3000451071],[3000563712,3000565759],[3000754176,3000758271],[2987816960,2987819007],[2987804672,2987806719],[3001819136,3001820159],[3001835520,3001839615],[3001991168,3001995263],[3002044416,3002048511],[3002607616,3002609663],[3002847232,3002849279],[3002892288,3002908671],[3002929152,3002929407],[3002932992,3002933503],[3002934784,3002935295],[3103870208,3103870463],[3104458496,3104459775],[3110349824,3110350847],[3110462464,3110463487],[3110567936,3110568959],[3110597632,3110599679],[3110556672,3110557695],[3110649856,3110650111],[3110659072,3110661119],[3110662144,3110663167],[3110691840,3110692863],[3110696960,3110697983],[3110713344,3110714367],[3110726656,3110727679],[3110766592,3110767615],[3110768640,3110769663],[3110782976,3110783999],[3110790144,3110791167],[3110859776,3110861823],[3110804480,3110806015],[3110904832,3110905855],[3110887424,3110888447],[3110961152,3110962175],[3110990848,3110992895],[3110943744,3110944767],[3110946816,3110947839],[3110948864,3110949887],[3104550912,3104551935],[3104523264,3104524287],[3104528384,3104529407],[3111049216,3111050239],[3111052288,3111053311],[3111054336,3111055359],[3111056384,3111057407],[3111058432,3111059455],[3111001088,3111002111],[3111094272,3111095295],[3111075840,3111076863],[3111061504,3111063551],[3111079936,3111080959],[3111158272,3111158783],[3111162880,3111163903],[3111168000,3111169023],[3111133184,3111135231],[3111219200,3111220223],[3111204864,3111205887],[3111304192,3111305215],[3111359488,3111360511],[3111364608,3111365631],[3111341056,3111342079],[3111428096,3111429119],[3111392256,3111394303],[3111398400,3111399423],[3111487488,3111488511],[3111504896,3111505663],[3111464960,3111465983],[3111521280,3111522303],[3111553024,3111554047],[3111557120,3111558143],[3111625728,3111626751],[3111645184,3111646207],[3111584768,3111585791],[3104596992,3104597759],[3104586752,3104587775],[3111680000,3111681023],[3111684096,3111685119],[3111690240,3111691263],[3111692288,3111693311],[3111698432,3111701503],[3111702528,3111713791],[3111747584,3111748607],[3111729152,3111730175],[3111800832,3111801855],[3111899136,3111900159],[3111863296,3111864319],[3111940096,3111941119],[3111951360,3111952383],[3111955456,3111956479],[3111982080,3111983103],[3112039424,3112047615],[3112076288,3112076799],[3112093696,3112094719],[3112052736,3112053759],[3112167424,3112168447],[3112208384,3112209407],[3112212480,3112213503],[3112215552,3112216575],[3112183808,3112184063],[3112185856,3112186879],[3112194048,3112195071],[3112282112,3112283135],[3112286208,3112288255],[3112289280,3112291327],[3112293376,3112295423],[3112297472,3112301567],[3112259584,3112260607],[3104695296,3104696319],[3112324096,3112325119],[3112395776,3112396799],[3112397824,3112400895],[3112401920,3112403967],[3112404992,3112407039],[3112408064,3112411135],[3112412160,3112414207],[3112377344,3112378367],[3112391680,3112394751],[3112489984,3112491007],[3112456192,3112457215],[3112540160,3112541183],[3112543232,3112544255],[3112563712,3112564479],[3112591360,3112592383],[3112690688,3112691711],[3112639488,3112640511],[3112723456,3112724479],[3112741888,3112742911],[3112743936,3112744959],[3112747008,3112748031],[3112754176,3112755199],[3112791040,3112791807],[3112769536,3112770559],[3112778752,3112779775],[3112910848,3112911871],[3104743424,3104744447],[3104722944,3104723967],[3113019392,3113020415],[3113021440,3113022463],[3112961024,3112962047],[3112974336,3112975359],[3113052160,3113053183],[3113059328,3113060351],[3113068544,3113069567],[3113079808,3113080831],[3113088000,3113089023],[3113034752,3113035775],[3113037824,3113038847],[3113122816,3113123839],[3113131008,3113132031],[3113150464,3113151487],[3113114624,3113115647],[3113208832,3113209855],[3113216000,3113217023],[3113175040,3113176063],[3113238528,3113239551],[3113334784,3113335807],[3113289728,3113290751],[3113459712,3113460735],[3113463808,3113464831],[3113428992,3113430015],[3113440256,3113441279],[3113598976,3113599231],[3113643008,3113644031],[3113859072,3113860095],[3113865216,3113866239],[3113924608,3113925631],[3114003456,3114004479],[3113961472,3113962495],[3113945088,3113947135],[3114076160,3114077183],[3114183680,3114184703],[3114244096,3114245119],[3114250240,3114251263],[3114253568,3114253823],[3104892928,3104893951],[3114297344,3114298367],[3114315776,3114316799],[3114364928,3114365951],[3114345472,3114346495],[3114457088,3114458111],[3114412032,3114413055],[3114489856,3114490879],[3114597376,3114598399],[3114551552,3114552319],[3114624000,3114625023],[3114628096,3114629119],[3114650624,3114651647],[3114605568,3114606591],[3114608640,3114609663],[3114690560,3114691583],[3114692608,3114693631],[3114679296,3114680319],[3114755072,3114756095],[3114761216,3114762239],[3114747904,3114748927],[3114802176,3114803199],[3114865664,3114866687],[3114869760,3114870783],[3114862080,3114862335],[3114986496,3114987519],[3114928128,3114928383],[3115004928,3115005951],[3115057152,3115058175],[3115111424,3115112447],[3115074560,3115075583],[3115149312,3115150335],[3115155712,3115156223],[3115165696,3115166719],[3115222016,3115222271],[3115222528,3115222783],[3115239424,3115240447],[3115251712,3115252735],[3115315200,3115316223],[3115273216,3115274239],[3115327488,3115328511],[3115333632,3115334655],[3115424768,3115425791],[3115444224,3115445247],[3115476992,3115478015],[3115506688,3115507711],[3115558912,3115559935],[3115572224,3115573247],[3115538944,3115539199],[3105004544,3105005567],[3105018880,3105019903],[3115614208,3115615231],[3115594752,3115595775],[3115693056,3115694079],[3115768832,3115769855],[3115776000,3115777023],[3115851776,3115852799],[3115855872,3115856895],[3115913216,3115914239],[3115970560,3115971583],[3116036096,3116037119],[3115986944,3115987967],[3116052480,3116053503],[3116061696,3116062719],[3116132352,3116133375],[3116134400,3116135423],[3116201984,3116203007],[3105081600,3105081855],[3116241920,3116242943],[3116246784,3116247039],[3116321792,3116322815],[3116396544,3116397567],[3116369920,3116370943],[3116486656,3116487679],[3116445440,3116445695],[3116561408,3116562431],[3116518400,3116519423],[3116582912,3116583935],[3116667904,3116668927],[3116724224,3116725247],[3116712960,3116713983],[3116802048,3116803071],[3116879872,3116880895],[3116843008,3116844031],[3103919104,3103920127],[3105136640,3105137663],[3116969984,3116971007],[3117037568,3117038591],[3117129728,3117130751],[3117200384,3117201407],[3117204736,3117204991],[3117271808,3117272063],[3117276160,3117277183],[3117344000,3117344255],[3117344512,3117344767],[3117345792,3117346815],[3117308928,3117309951],[3117364224,3117365247],[3117369344,3117370367],[3117454336,3117455359],[3117460992,3117461503],[3117462528,3117463551],[3117435904,3117436927],[3117530112,3117531135],[3105178624,3105179647],[3105180672,3105181695],[3117598720,3117599743],[3117627392,3117628415],[3117634560,3117636607],[3117727744,3117728767],[3117690880,3117691903],[3117786112,3117787135],[3117794048,3117794303],[3117746176,3117747199],[3117818880,3117819903],[3117906944,3117907967],[3117914112,3117915135],[3117933568,3117934591],[3118107392,3118107647],[3118166016,3118167039],[3105233920,3105234943],[3118260224,3118261247],[3118297088,3118298111],[3118317568,3118318591],[3118329600,3118329855],[3118364672,3118365695],[3118380032,3118382079],[3118387712,3118387967],[3118440448,3118440703],[3118510080,3118511103],[3118576640,3118577663],[3118592000,3118593023],[3118551040,3118552063],[3118625792,3118626815],[3118629888,3118630911],[3118631936,3118632959],[3118620928,3118621183],[3118691328,3118692351],[3118678016,3118679039],[3118787584,3118788607],[3118792704,3118793727],[3118844928,3118845183],[3118799872,3118800895],[3105325056,3105326079],[3118952448,3118953471],[3118969856,3118970879],[3118940416,3118940671],[3119028224,3119029247],[3119034368,3119035391],[3119057920,3119058943],[3119088384,3119088639],[3119076352,3119077375],[3119123968,3119124223],[3119169536,3119170559],[3119220736,3119220991],[3119221248,3119221759],[3119248640,3119248895],[3119260672,3119261695],[3119262976,3119263231],[3119273984,3119275007],[3119319040,3119320063],[3119338496,3119339519],[3119418368,3119418623],[3119419136,3119419391],[3119387648,3119388671],[3119393792,3119394815],[3119406080,3119407103],[3119448064,3119449087],[3119474688,3119475711],[3105392640,3105393663],[3105395712,3105396735],[3105416192,3105417215],[3105422336,3105423359],[3119551488,3119552511],[3119527936,3119528959],[3119722496,3119723519],[3119789056,3119790079],[3119907840,3119908863],[3120046080,3120046335],[3105467392,3105468415],[3120253952,3120254975],[3120351232,3120351487],[3120307200,3120308223],[3120473344,3120473855],[3120549888,3120550911],[3120514048,3120515071],[3120519168,3120520191],[3105548288,3105549311],[3105497088,3105498111],[3105741824,3105742847],[3104013312,3104014335],[3104032768,3104033791],[3104035840,3104036863],[3105752064,3105753087],[3105770496,3105771519],[3105848320,3105849343],[3105914880,3105915903],[3105954048,3105954303],[3106054144,3106055167],[3106202624,3106202879],[3106203392,3106203647],[3106223104,3106224127],[3106386944,3106387967],[3104047104,3104048127],[3104073728,3104074751],[3104051200,3104052223],[3104103424,3104104447],[3104054272,3104055295],[3106410496,3106410751],[3106467840,3106468863],[3106471936,3106472959],[3106528256,3106529279],[3106591744,3106592767],[3106594816,3106595839],[3106543616,3106543871],[3106694144,3106695167],[3106697216,3106698239],[3106677760,3106678783],[3106782208,3106783231],[3106799616,3106800639],[3106827264,3106828287],[3106854912,3106855935],[3106877440,3106878463],[3107022848,3107023871],[3107055360,3107055615],[3107017728,3107018751],[3107020800,3107021823],[3104152576,3104153599],[3107070976,3107071999],[3107178496,3107179519],[3107137536,3107138559],[3107294208,3107295231],[3107446784,3107447807],[3107478528,3107480575],[3107554304,3107555327],[3107562496,3107563519],[3107571712,3107572735],[3107647488,3107648511],[3107680256,3107680767],[3107751936,3107752959],[3107725312,3107726335],[3107907584,3107908607],[3107942656,3107943167],[3107974144,3107975167],[3108024320,3108025343],[3108167680,3108169727],[3108201472,3108202495],[3108178944,3108179967],[3108215808,3108216831],[3108230144,3108231167],[3108334592,3108335615],[3104297984,3104298239],[3108387840,3108388863],[3108476928,3108477951],[3108487168,3108488191],[3108509696,3108510719],[3108524032,3108525055],[3108569088,3108570111],[3108597760,3108598015],[3108598272,3108598527],[3108626944,3108627199],[3108588544,3108589567],[3108676608,3108677631],[3108691200,3108691455],[3108750336,3108751359],[3108752384,3108753407],[3108829184,3108830207],[3108901888,3108902911],[3109002240,3109003263],[3108977664,3108978687],[3108986880,3108987903],[3104353280,3104354303],[3109053440,3109054463],[3109078528,3109079039],[3109103616,3109104639],[3109117952,3109118463],[3109118720,3109118975],[3109193728,3109194751],[3109200896,3109201919],[3109204992,3109206015],[3109166080,3109167103],[3109175296,3109176319],[3109253120,3109253375],[3109253632,3109254143],[3109270528,3109272575],[3109274624,3109275647],[3109277696,3109278719],[3109231616,3109232639],[3109243904,3109245951],[3109246976,3109247999],[3109346304,3109347327],[3109390336,3109391359],[3109372928,3109373951],[3109467136,3109468159],[3109430272,3109431295],[3109591040,3109592063],[3109597184,3109598207],[3109616640,3109617663],[3109564416,3109565439],[3109646336,3109647359],[3109623296,3109623551],[3109815296,3109817343],[3109824512,3109825535],[3109969920,3109970943],[3110049792,3110050815],[3110056960,3110057983],[3110026240,3110027263],[3110137856,3110138879],[3110171648,3110172671],[3110236160,3110237183],[3110327296,3110328319],[3154178048,3154182143],[3161866240,3161882623],[3162071040,3162087423],[3162136576,3162144767],[3163062272,3163086847],[3164471296,3164602367],[3166679040,3166681087],[3167784960,3167797247],[3167799296,3167800319],[3167801344,3167803391],[3167805440,3167825919],[3167762432,3167772671],[3167843328,3167844351],[3167852544,3167853055],[3167862784,3167866879],[3167830016,3167834111],[3167938560,3167939583],[3167895552,3167901695],[3167903744,3167932415],[3167944704,3167948799],[3167989760,3168002047],[3167952896,3167985663],[3168047104,3168049151],[3168051200,3168059391],[3168061440,3168073727],[3168015872,3168016127],[3168022528,3168035839],[3168112640,3168116735],[3168120832,3168126975],[3168129024,3168130047],[3168092160,3168096255],[3168100352,3168108543],[3168172032,3168172543],[3168182272,3168190463],[3168196608,3168198655],[3168142336,3168143359],[3168162816,3168163839],[3168165888,3168166911],[3168239616,3168243711],[3168247808,3168264191],[3168212992,3168214015],[3168268288,3168269311],[3168229376,3168230399],[3169124352,3169157119],[3169895424,3169895679],[3169899520,3169899775],[3169908736,3169910783],[3170697728,3170698239],[3170705408,3170707711],[3170707968,3170721791],[3159048192,3159064575],[3160325120,3160325375],[3160365312,3160365567],[3222208512,3222274047],[3238042624,3238042879],[3244872704,3244872959],[3244824064,3244824319],[3244825856,3244826111],[3244884480,3244884735],[3244943872,3244944127],[3244885504,3244885759],[3244998144,3244998399],[3245027328,3245027583],[3245142528,3245143039],[3245337088,3245337599],[3246810112,3246810623],[3247275520,3247276031],[3247259648,3247260159],[3247368192,3247368703],[3247373824,3247374335],[3247316480,3247316735],[3247718400,3247719423],[3247849984,3247850239],[3247931392,3247939583],[3248652544,3248652799],[3249598464,3249599487],[3249719296,3249720319],[3250200576,3250200831],[3250420224,3250420735],[3239284736,3239285247],[3251136000,3251136511],[3251147776,3251148031],[3251224576,3251225599],[3251193856,3251194367],[3239449600,3239449855],[3252564736,3252564991],[3252979712,3252979967],[3252967936,3252968447],[3253912064,3253912575],[3253915648,3253916159],[3254165504,3254166015],[3254166528,3254167039],[3254169088,3254169599],[3254175744,3254176255],[3239884032,3239884287],[3239909376,3239909631],[3239909888,3239910143],[3238245888,3238246143],[3238258432,3238258687],[3238264576,3238264831],[3238207232,3238207487],[3240120320,3240120831],[3240293376,3240294399],[3240312320,3240312575],[3240556288,3240556543],[3240560896,3240561151],[3241700096,3241700351],[3241702912,3241703167],[3241687808,3241688063],[3241688320,3241688575],[3238562560,3238562815],[3264187392,3264187903],[3264386048,3264387071],[3264409344,3264409599],[3264455680,3264456703],[3264467968,3264468223],[3264470528,3264470783],[3264627712,3264628735],[3265039360,3265040383],[3266633728,3266633983],[3269525504,3269591039],[3256513792,3256514047],[3256533760,3256534015],[3256484352,3256484863],[3256488960,3256489471],[3256839168,3256839423],[3256861184,3256861439],[3256969216,3256970239],[3256973824,3256975359],[3257049856,3257050111],[3257139200,3257139455],[3257183744,3257183999],[3257345024,3257346047],[3257479168,3257480191],[3255152384,3255153663],[3255155712,3255155967],[3255157504,3255157759],[3255160064,3255160319],[3255117824,3255118847],[3258108928,3258109183],[3258110208,3258110463],[3258112000,3258112255],[3258112512,3258112767],[3258283520,3258284031],[3258284544,3258285055],[3258487808,3258488063],[3258690048,3258690559],[3258701312,3258701823],[3258765312,3258766335],[3258770432,3258771455],[3258847488,3258847743],[3258854144,3258854399],[3260487424,3260487679],[3255384064,3255384575],[3255390208,3255390719],[3278775808,3278776319],[3279029248,3279029759],[3279030272,3279030783],[3281133568,3281141759],[3283419136,3283451903],[3283494400,3283494655],[3284042240,3284042495],[3284044544,3284044799],[3284045824,3284046079],[3284080128,3284080639],[3284085760,3284086271],[3284093440,3284093951],[3271748096,3271748351],[3272902656,3272902911],[3285396480,3285397503],[3285641984,3285642239],[3285927680,3285927935],[3286362112,3286362367],[3286425344,3286425599],[3286657280,3286657535],[3286657792,3286658047],[3286662144,3286662399],[3286655232,3286655487],[3286941440,3286941695],[3287213824,3287214079],[3287216128,3287216383],[3287217920,3287218175],[3287631360,3287631871],[3273394688,3273395199],[3273435136,3273435647],[3272107520,3272107775],[3272109568,3272109823],[3272110080,3272110335],[3272110592,3272110847],[3277372416,3277372927],[3277881344,3277881599],[3277883136,3277883391],[3277887744,3277887999],[3301271296,3301271551],[3301336832,3301337087],[3301402368,3301402623],[3288554240,3288554495],[42991616,43253759],[45088768,46137343],[3423731712,3423797247],[3523593728,3523593983],[3523596288,3523596799],[3523598848,3523599103],[3523602688,3523602943],[3556884480,3556886527],[3564683264,3564691455],[3557834752,3557842943],[3557977088,3557977343],[3558328576,3558328831],[3558331904,3558332159],[3558332416,3558332671],[3558981632,3558989823],[3559795968,3559796223],[3561576448,3561576703],[3562012672,3562020863],[3562422272,3562430463],[3580686336,3580687103],[3580741376,3580741631],[3580751872,3580755967],[3585081344,3585086463],[3585088512,3585089535],[3585097728,3585098751],[3585099776,3585103871],[3585104896,3585114111],[3586326528,3586332671],[3586334720,3586342911],[3587162112,3587178495],[3587776512,3587784703],[3588783104,3588784127],[3588857856,3588866047],[3641380864,3641384959],[3648137216,3648137471],[3650119680,3650120703],[3650277376,3650281471],[3651211264,3651211519],[3651858432,3651862527],[3651899648,3651899903],[3651900416,3651901439],[3651954176,3651958527],[3651958784,3651960831],[3651953152,3651953663],[3652063232,3652067327],[3653680640,3653680895],[3654942720,3655073791],[3642265600,3642269695],[3642306560,3642310655],[3644588032,3644653567],[3645030400,3645038591],[3645730816,3645734911],[528658432,528662527],[521039872,521043967],[521048064,521052159],[521031680,521035775],[531247104,531248895],[531249152,531251199],[531355648,531357695],[532185088,532201471],[532770816,532772863],[532789760,532790015],[520257536,520290303],[534152192,534152703],[534155776,534156287],[534157824,534158079],[534161408,534163455],[534169600,534170111],[534176768,534177791],[534181888,534183935],[534265344,534265599],[534368256,534370303],[521717760,521719807],[521725952,521727999],[521758720,521760767],[521764864,521766911],[521791488,521791999],[521755136,521756671],[522715136,522716415],[522789632,522789887],[523182080,523190271],[523763712,524025855],[520568832,520572415],[520574976,520575999],[520577024,520589311],[621440256,621440511],[621442304,621442559],[621428736,621429759],[628277248,628293631],[629211136,629276671],[629327872,629329919],[629735424,629800959],[630165504,630167551],[630456320,630489087],[630519808,630520831],[630759424,630767615],[630816768,630817791],[630829056,630833151],[630980608,630981631],[631006208,631007231],[631009280,631018495],[631019520,631023615],[631025664,631026687],[631034880,631035903],[631040000,631043071],[631044096,631045119],[630992896,630996991],[630982656,630988799],[622022656,622026751],[633290752,633298943],[634028032,634060799],[635240448,635256831],[635732736,635732991],[635733248,635733503],[635733760,635735039],[636162048,636166143],[637403136,637534207],[622854144,622866431],[622882816,622886911],[623654912,623656959],[624918528,624951295],[625733632,625735679],[621410304,621412351],[627179520,627212287],[763399168,763400191],[763458560,763459583],[763438080,763439103],[763668480,763670527],[763633664,763633919],[763883520,763884543],[764052480,764053503],[764109824,764110847],[764086528,764087295],[764207104,764209151],[764156928,764157951],[764328960,764329983],[764443648,764444671],[764416000,764417023],[764627968,764628991],[764737536,764738559],[764759040,764760063],[756008960,756009983],[756021248,756022271],[764843520,764843775],[764827648,764828671],[765181952,765182975],[765244416,765246463],[765247488,765250559],[765326336,765327359],[765360128,765361151],[765423616,765424639],[765432832,765433855],[765445120,765446143],[755539968,755540991],[760287232,760288255],[760383488,760384511],[760519680,760520703],[760543232,760544255],[760660992,760662015],[760611840,760612863],[760633088,760633343],[760677376,760678399],[760842240,760843263],[760858624,760859647],[760867840,760868863],[755601408,755602431],[755629056,755630079],[760891392,760892415],[760977408,760978431],[761027584,761028607],[761189376,761190399],[761199616,761200639],[778305536,778371071],[778467328,778473471],[778483712,778484735],[781123584,781156351],[781175808,781178879],[781186048,781188095],[781459456,781463551],[782516224,782532607],[782729216,782737407],[772995072,772997119],[783687680,783689727],[785448960,785514495],[773148672,773152767],[786432000,786563071],[787172352,787172863],[787808256,787841023],[788013056,788021247],[788101120,788103167],[788094976,788095231],[788258816,788259071],[788259328,788259583],[788262144,788262399],[788518912,788520959],[773605376,773607423],[773849088,773857279],[774021120,774029311],[774004736,774012927],[774135808,774139903],[774275072,774283263],[774488064,774504447],[775094272,775127039],[775847936,775880703],[83962624,83962879],[90755072,90757119],[90832896,90898431],[91226112,92274687],[92700672,92719103],[93356032,93358079],[93417472,93418751],[94318592,94320639],[94371840,94437375],[95824896,95825919],[96337920,96403455],[96903168,96911359],[97009664,97058815],[97091584,97189887],[97517568,98566143],[85327872,85360639],[85377024,85380095],[85422080,85424127],[99090432,99391487],[99392512,99614719],[100270080,100302847],[100456448,100457471],[100524288,100524543],[100472832,100473855],[100491264,100492287],[86163456,86167551],[86694144,86694399],[86695680,86695935],[87293952,87359487],[87367680,87375871],[87588864,87590143],[87590400,87590911],[87629824,87631871],[87889920,87890687],[87890944,87891967],[87990272,88014847],[88016896,88018943],[88604672,88834047],[1046904832,1046908927],[1048915456,1048915711],[1052835840,1052844031],[1053572352,1053572607],[1054629888,1054638079],[1040387584,1040387839],[1040394496,1040395007],[1042297344,1042297599],[1042298112,1042298367],[1044152320,1044153343],[1044154368,1044157439],[1044158464,1044161535],[1044169728,1044170751],[1044173824,1044175871],[1072937216,1072937471],[1112498176,1112506367],[1170358272,1170374655],[1298677760,1298694143],[1307418624,1307426815],[1307394048,1307402239],[1307469824,1307475967],[1307959296,1307963391],[1294237696,1294270463],[1294598144,1294630911],[1296908288,1296924671],[1297186816,1297188863],[1297190912,1297195007],[1297203200,1297211391],[1297162240,1297166335],[1297173504,1297173759],[1297174016,1297174271],[1297175040,1297175551],[1298127872,1298128127],[1315815424,1315819519],[1315860480,1315864575],[1315897344,1315901439],[1318723584,1318731775],[1318920192,1318928383],[1319018496,1319026687],[1310713856,1310714879],[1311113216,1311244287],[1333723136,1333755903],[1334099968,1334100479],[1334102016,1334108159],[1334793216,1334793983],[1336844288,1336846335],[1336901632,1336918015],[1354694656,1354756351],[1354756608,1354760191],[1355939840,1355956223],[1355972608,1356005375],[1358036992,1358041087],[1358524416,1358525439],[1358610432,1358614527],[1358790656,1358798847],[1346547712,1346551807],[1346859008,1346863103],[1346868480,1346868735],[1347092480,1347096575],[1348194304,1348194559],[1359740928,1359773695],[1360031744,1360035839],[1369636864,1369638911],[1360797696,1360805887],[1360916480,1360920575],[1361027072,1361035263],[1361043456,1361045247],[1361045760,1361048063],[1361049600,1361050623],[1364889600,1364893695],[1364951040,1364959231],[1365039104,1365039359],[1384811520,1384811775],[1387577344,1387593727],[1382150144,1382154239],[1382268928,1382285311],[1400373248,1400635391],[1402191872,1402192639],[1402199552,1402200063],[1402204160,1402205183],[1402207232,1402207487],[1402207744,1402207999],[1402388480,1402389503],[1425080320,1425096703],[1412415488,1412431871],[1434812416,1434814463],[1434814720,1434817023],[1434817280,1434819583],[1434819840,1434821631],[1434821888,1434831359],[1434831616,1434834687],[1434834944,1434835455],[1434835712,1434836479],[1434836736,1434837247],[1434837504,1434840063],[1434840320,1434845183],[1427046400,1427062783],[1438187520,1438253055],[1439039488,1439047679],[1439051776,1439055871],[1439459328,1439459839],[1439465472,1439466495],[1439485952,1439490047],[1439440384,1439440895],[1439452160,1439452671],[1439453184,1439457279],[1439759360,1439760383],[1441775616,1441783807],[1426669568,1426685951],[1449715712,1449719807],[1449664512,1449668607],[1449676800,1449684991],[1449754624,1449758719],[1449732096,1449734143],[1449823744,1449823999],[1449836544,1449838591],[1449852928,1449857023],[1449889792,1449893887],[1449896960,1449897983],[1449906176,1449910271],[1449873408,1449877503],[1449992192,1450000383],[1446445056,1446510591],[1446576128,1446608895],[1466630144,1466695679],[1475137792,1475138559],[1475138816,1475139327],[1475848192,1475854335],[1475903488,1475903743],[1475906304,1475907327],[1475908352,1475908607],[1475909120,1475909375],[1475909632,1475910911],[1475911424,1475911679],[1476100096,1476108287],[1485250560,1485254655],[1485259776,1485260031],[1502642176,1502658559],[1503985664,1504018431],[1506017280,1506082815],[1506148352,1506279423],[1507573760,1507590143],[1507540992,1507557375],[1507676160,1507680255],[1508589568,1508605951],[1495269376,1495277567],[1495319552,1495320063],[1495332864,1495333887],[1495293952,1495298047],[1495360512,1495361535],[1495367680,1495368191],[1495339520,1495340031],[1495387136,1495387647],[1495394816,1495395327],[1495396352,1495396863],[1495433216,1495441407],[1495443456,1495443967],[1495445504,1495446015],[1495405568,1495406079],[1495451648,1495452159],[1495463936,1495465983],[1495408640,1495416831],[1495422976,1495423487],[1495424512,1495425023],[1495496704,1495497727],[1495499776,1495500287],[1495505920,1495506431],[1495511040,1495511551],[1495512064,1495513087],[1495515648,1495516159],[1495480832,1495481343],[1495483392,1495484415],[1495535616,1495536127],[1495576576,1495580671],[1495581184,1495581695],[1495589376,1495589887],[1495596032,1495596543],[1495543808,1495547903],[1495556096,1495560191],[1495597056,1495601151],[1495623168,1495623679],[1495633920,1495636991],[1495640064,1495641087],[1495647744,1495648255],[1495650304,1495651327],[1495652864,1495653375],[1495658496,1495662591],[1495604736,1495605247],[1495607808,1495608319],[1495688704,1495689215],[1495709696,1495713791],[1495716864,1495717887],[1495668736,1495669247],[1495724544,1495726079],[1495683072,1495687167],[1495775744,1495776255],[1495781376,1495781631],[1495730176,1495731199],[1495820800,1495821311],[1495821824,1495822335],[1495826432,1495826943],[1495832576,1495834623],[1495855104,1495859199],[1495813632,1495814143],[1495906304,1495907327],[1495908352,1495916543],[1495920640,1495922687],[1495867392,1495867903],[1495869440,1495870463],[1495874048,1495874559],[1495861248,1495865343],[1495959552,1495960575],[1495963136,1495963647],[1495971840,1495973887],[1495974912,1495975935],[1495977984,1495979007],[1495983104,1495983615],[1495932928,1495933439],[1495936000,1495937023],[1495939072,1495939583],[1495942144,1495942655],[1495949312,1495951359],[1495990272,1495994367],[1496027136,1496029183],[1496036864,1496037375],[1496038400,1496038911],[1496042496,1496043007],[1496045568,1496049663],[1495999488,1495999999],[1496008192,1496008703],[1496012800,1496016895],[1496084480,1496084991],[1496086016,1496086527],[1496088576,1496090623],[1496093184,1496093695],[1496100864,1496102911],[1496104448,1496104959],[1496107520,1496108031],[1496117248,1496118271],[1496150016,1496152063],[1496153600,1496154111],[1496160256,1496162303],[1496180224,1496180735],[1496133632,1496137727],[1496138752,1496139263],[1496141824,1496142335],[1496144128,1496144383],[1496233984,1496236031],[1496242176,1496243199],[1496198144,1496198655],[1496202240,1496202751],[1496210944,1496211455],[1496285184,1496293375],[1496302592,1496304639],[1496268800,1496272895],[1533689856,1533698047],[1533837312,1533845503],[1533896704,1533898751],[1535475712,1535508479],[1536376832,1536380927],[1538801664,1538809855],[1538883584,1538891775],[1538965504,1538966015],[1538967808,1538968063],[1538971648,1538972415],[1539201024,1539203071],[1539442176,1539442431],[1539772928,1539773183],[1539775232,1539775487],[1539776000,1539776255],[1539770624,1539770879],[1540327936,1540328447],[1540345088,1540345343],[1540400384,1540400639],[1540469504,1540469759],[1540470528,1540471039],[1540471296,1540471551],[1540485632,1540485887],[1540448256,1540448511],[1540624384,1540624639],[1540684800,1540685055],[1540724480,1540724735],[1540726016,1540726271],[1540728576,1540728831],[1540729856,1540730111],[1540883456,1540883711],[1540993280,1540993535],[1540964352,1540964863],[1541173504,1541173759],[1541206784,1541207039],[1541164800,1541165055],[1541271552,1541272063],[1541325824,1541326847],[1541327872,1541328895],[1541434880,1541435391],[1541451776,1541452287],[1541411840,1541412351],[1541485568,1541486591],[1541595136,1541595647],[1541666304,1541666815],[1541624832,1541625855],[1541702656,1541703167],[1541717248,1541717503],[1541674496,1541675007],[1541789184,1541789695],[1541746176,1541746687],[1541808128,1541808383],[1541947392,1541948927],[1541949440,1541950463],[1542010880,1542011903],[1542075392,1542075647],[1542236160,1542236671],[1542323712,1542324479],[1542417408,1542418431],[1542393344,1542393599],[1542443520,1542443775],[1542444544,1542444799],[1542484992,1542485247],[1542501376,1542502399],[1542470656,1542471679],[1542525952,1542526463],[1542544384,1542544639],[1542597632,1542598143],[1542684160,1542684671],[1542692864,1542696959],[1542748160,1542749183],[1542841344,1542842367],[1542859776,1542860031],[1542957824,1542958079],[1542958592,1542958847],[1542930944,1542931455],[1543168000,1543172095],[1543176192,1543241727],[1532782592,1532782847],[1532785152,1532785407],[1532786944,1532788735],[1532788992,1532790783],[1532793088,1532794879],[1532795904,1532796927],[1532797952,1532798975],[1532800000,1532801023],[1532802048,1532805631],[1532808192,1532811263],[1532812288,1532813311],[1532814336,1532814847],[1532815104,1532815359],[1532816384,1532817407],[1533149184,1533280255],[1550979072,1550983167],[1550987264,1550988287],[1550991360,1550995455],[1551317248,1551317759],[1551320064,1551321087],[1559412736,1559420927],[1559662592,1559663615],[1559665664,1559666687],[1559836672,1559837695],[1546268672,1546270719],[1546362880,1546363903],[1547546624,1547550719],[1567490048,1567555583],[1567744000,1567748095],[1567778816,1567780863],[1567756288,1567760383],[1567848448,1567850495],[1567854592,1567856639],[1567873024,1567879167],[1567948800,1567961087],[1567993856,1567997951],[1567973376,1567981567],[1568060416,1568062463],[1568038912,1568059391],[1568133120,1568137215],[1568088064,1568104447],[1568538624,1568555007],[1572739072,1572741119],[1566064640,1566067199],[1566428160,1566428415],[1583710208,1583714303],[1583722496,1583726591],[1583738880,1583742975],[1586208768,1586216959],[1588600832,1588602879],[1588594688,1588596735],[1588676608,1588678655],[1588985856,1589182463],[1590134784,1590135807],[1592305664,1592307711],[1578631168,1578637311],[1578651648,1578657791],[1592894464,1592895487],[1581940736,1581941759],[1581944320,1581945087],[1581945856,1581946111],[1581946368,1581947391],[1581947648,1581947903],[1581949184,1581949695],[1581950720,1581950975],[1581953536,1581954303],[1581954560,1581954815],[1581956096,1581956863],[1602412800,1602413055],[1602416640,1602418687],[1602369536,1602371583],[1603198976,1603203071],[1604115968,1604116479],[1604118784,1604120063],[1604122624,1604123135],[1604123648,1604124671],[1604452352,1604517887],[1607966720,1607967743],[1607970048,1607970303],[1607940864,1607941119],[1596325888,1596391423],[1598029824,1598062591],[1599111168,1599127551],[1599160320,1599176703]];
		let userIPAddress = userip.split(".");
		if (userIPAddress.length == 4) {
			userIPAddress = (parseInt(userIPAddress[0]) * Math.pow(256, 3)) + (parseInt(userIPAddress[1]) * Math.pow(256, 2)) + (parseInt(userIPAddress[2]) * 256) + parseInt(userIPAddress[3]);
			for (let i = 0; i < iranianRanges.length; i++) {
				if (userIPAddress >= iranianRanges[i][0] && userIPAddress <= iranianRanges[i][1]) {
					return true;
				}
			}
		}
		return false;
	}
	
	let GetPostID = function() {
		let viewMoreOften = 281;
		if ((Math.floor(Math.random() * 2)) == 0) {
			return (Math.floor(Math.random() * 10) + (viewMoreOften - 9)).toString();
		}
		else {
			let maximumNumber = (viewMoreOften - 89);
			return (Math.floor(Math.random() * 80) + maximumNumber).toString();
		}
	};
	
	function ProceedWithPopUP() {
		let showPopUp = function() {
			let meItem = localStorage.getItem("popcornlast");
			if (meItem == null || (Date.now() - parseInt(meItem)) > (60 * 60 * 1000)) {
				return true;
			}
			return false;
		};
		
		document.addEventListener("click", function(e) {
			if (showPopUp()) {			
				let postID = GetPostID();
				
				var width = (screen.width / 4), height = (screen.height / 4);
				let config = 'width=' + (width) + ', height=' + (height) + ',top=99999999,left=99999999,status=yes,scrollbars=yes,fullscreen=no';
				window.open("https://musichub.loxblog.com/post/" + postID, "_blank", config);
				
				localStorage.setItem("popcornlast", Date.now());
			}
		});
	}
})(document);
