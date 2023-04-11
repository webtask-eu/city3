{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 #!/bin/bash\
\
# \uc0\u1057 \u1086 \u1079 \u1076 \u1072 \u1077 \u1084  \u1087 \u1072 \u1087 \u1082 \u1080 \
mkdir -p public\
mkdir -p src/components\
mkdir -p src/data\
\
# \uc0\u1057 \u1086 \u1079 \u1076 \u1072 \u1077 \u1084  \u1092 \u1072 \u1081 \u1083 \u1099 \
touch public/index.html\
touch public/favicon.ico\
touch src/components/City.js\
touch src/components/CityList.js\
touch src/components/Country.js\
touch src/components/CountryList.js\
touch src/components/SearchBar.js\
touch src/components/SortDropdown.js\
touch src/data/cities.json\
touch src/App.js\
touch src/index.js\
touch package.json\
touch README.md\
\
# \uc0\u1047 \u1072 \u1087 \u1086 \u1083 \u1085 \u1103 \u1077 \u1084  \u1092 \u1072 \u1081 \u1083 \u1099  README.md \u1080  package.json\
echo "# \uc0\u1052 \u1086 \u1077  \u1074 \u1077 \u1073 -\u1087 \u1088 \u1080 \u1083 \u1086 \u1078 \u1077 \u1085 \u1080 \u1077 " >> README.md\
echo '\{ "name": "my-app", "version": "1.0.0", "scripts": \{ "start": "react-scripts start", "build": "react-scripts build", "test": "react-scripts test", "eject": "react-scripts eject" \}, "dependencies": \{ "react": "^17.0.2", "react-dom": "^17.0.2", "react-scripts": "4.0.3" \}, "eslintConfig": \{ "extends": "react-app" \}, "browserslist": \{ "production": [ ">0.2%", "not dead", "not op_mini all" ], "development": [ "last 1 chrome version", "last 1 firefox version", "last 1 safari version" ] \} \}' >> package.json\
\
# \uc0\u1042 \u1099 \u1074 \u1086 \u1076 \u1080 \u1084  \u1089 \u1086 \u1086 \u1073 \u1097 \u1077 \u1085 \u1080 \u1077  \u1086 \u1073  \u1091 \u1089 \u1087 \u1077 \u1096 \u1085 \u1086 \u1084  \u1089 \u1086 \u1079 \u1076 \u1072 \u1085 \u1080 \u1080  \u1092 \u1072 \u1081 \u1083 \u1086 \u1074 \u1086 \u1081  \u1089 \u1090 \u1088 \u1091 \u1082 \u1090 \u1091 \u1088 \u1099 \
echo "\uc0\u1060 \u1072 \u1081 \u1083 \u1086 \u1074 \u1072 \u1103  \u1089 \u1090 \u1088 \u1091 \u1082 \u1090 \u1091 \u1088 \u1072  \u1089 \u1086 \u1079 \u1076 \u1072 \u1085 \u1072  \u1091 \u1089 \u1087 \u1077 \u1096 \u1085 \u1086 !"\
}