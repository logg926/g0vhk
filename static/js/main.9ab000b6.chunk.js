(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{345:function(e,n,t){e.exports=t(882)},877:function(e,n,t){},882:function(e,n,t){"use strict";t.r(n);t(346),t(397),t(585),t(586),t(587),t(588),t(589),t(590),t(591),t(592),t(593),t(594),t(595),t(596),t(597),t(598),t(599),t(600),t(601),t(602),t(603),t(604),t(605),t(606),t(607),t(608),t(609),t(610),t(611),t(161),t(612),t(613),t(614),t(615),t(616),t(617),t(618),t(619),t(620),t(621),t(622),t(623),t(624),t(625),t(626),t(627),t(628),t(629),t(630),t(632),t(633),t(635),t(636),t(637),t(638),t(214),t(639),t(640),t(641),t(642),t(643),t(644),t(645),t(646),t(647),t(648),t(649),t(650),t(651),t(652),t(653),t(654),t(655),t(656),t(657),t(658),t(659),t(660),t(661),t(662),t(663),t(664),t(665),t(666),t(667),t(668),t(669),t(670),t(671),t(672),t(673),t(674),t(675),t(676),t(677),t(678),t(679),t(680),t(681),t(682),t(683),t(684),t(685),t(686),t(687),t(688),t(689),t(690),t(691),t(693),t(694),t(695),t(696),t(697),t(698),t(699),t(701),t(702),t(703),t(704),t(705),t(706),t(707),t(708),t(709),t(710),t(711),t(712),t(713),t(714),t(715),t(323),t(716),t(717),t(718),t(719),t(324),t(720),t(721),t(722),t(723),t(724),t(725),t(726),t(727),t(728),t(729),t(730),t(731),t(732),t(733),t(734),t(735),t(736),t(737),t(738),t(739),t(740),t(741),t(742),t(743),t(744),t(745),t(746),t(747),t(748),t(749),t(750),t(751),t(752),t(753),t(754),t(755),t(756),t(757),t(758),t(759),t(760),t(761),t(762),t(763),t(764),t(765),t(766),t(767),t(768),t(769),t(770),t(771),t(772),t(773),t(774),t(775),t(776),t(777),t(778),t(224),t(779),t(780),t(781),t(782),t(783),t(784),t(785),t(786),t(787),t(788),t(789),t(790),t(791),t(792),t(793),t(795),t(796),t(797),t(798),t(799),t(800),t(801),t(802),t(803),t(804),t(805),t(806),t(807),t(808),t(809),t(810),t(811),t(812),t(813),t(814),t(815),t(816),t(817),t(818),t(819),t(820),t(821),t(822),t(823),t(824),t(825),t(826),t(827),t(828),t(829),t(830),t(831),t(832),t(833),t(834),t(835),t(836),t(837),t(838),t(839),t(840),t(841),t(842),t(843),t(844),t(845),t(846),t(847),t(848),t(849),t(850),t(851),t(854),t(855),t(856),t(857),t(858),t(859),t(860),t(861),t(862),t(863),t(864),t(865),t(866),t(867),t(868),t(869),t(871),t(334);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),t}e.prototype=window.Event.prototype,window.CustomEvent=e}();var a=t(3),o=t.n(a),r=t(336),c=t.n(r),l=t(337),i=t(338),u=t(343),m=t(339),s=t(344),d=t(340),p=t(86);var b=function(e){var n=e.children;return e.history,o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"app-body"},o.a.createElement("main",{className:"main"},n)))};function f(){return o.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")}t(876),t(877);var h=[{path:"/",exact:!0,name:"\u4e3b\u9801",component:o.a.lazy(function(){return t.e(3).then(t.bind(null,896))})},{path:"/bills",name:"\u8b70\u54e1",component:o.a.lazy(function(){return t.e(4).then(t.bind(null,897))})},{path:"/bill",name:"\u8b70\u54e1",component:o.a.lazy(function(){return t.e(5).then(t.bind(null,895))})},{path:"/categories",name:"\u8b70\u54e1",component:o.a.lazy(function(){return t.e(6).then(t.bind(null,898))})}],v=function(e){function n(){return Object(l.a)(this,n),Object(u.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(b,null,o.a.createElement(d.a,null,o.a.createElement(o.a.Suspense,{fallback:f},o.a.createElement(p.d,null,h.map(function(e,n){return e.component?o.a.createElement(p.b,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return o.a.createElement(e.component,n)}}):null}),o.a.createElement(p.a,{from:"/",to:"/dashboard"})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[345,1,2]]]);
//# sourceMappingURL=main.9ab000b6.chunk.js.map