var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kadakara_1 = new ol.format.GeoJSON();
var features_Kadakara_1 = format_Kadakara_1.readFeatures(json_Kadakara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kadakara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kadakara_1.addFeatures(features_Kadakara_1);
var lyr_Kadakara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kadakara_1, 
                style: style_Kadakara_1,
                popuplayertitle: 'Kadakara',
                interactive: false,
                title: '<img src="styles/legend/Kadakara_1.png" /> Kadakara'
            });
var format_Kadakara1_2 = new ol.format.GeoJSON();
var features_Kadakara1_2 = format_Kadakara1_2.readFeatures(json_Kadakara1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kadakara1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kadakara1_2.addFeatures(features_Kadakara1_2);
var lyr_Kadakara1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kadakara1_2, 
                style: style_Kadakara1_2,
                popuplayertitle: 'Kadakara1',
                interactive: true,
                title: '<img src="styles/legend/Kadakara1_2.png" /> Kadakara1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Kadakara_1.setVisible(true);lyr_Kadakara1_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kadakara_1,lyr_Kadakara1_2];
lyr_Kadakara_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERBLPAPRJ': 'KERBLPAPRJ', 'KERBLPAP_1': 'KERBLPAP_1', 'CODE': 'CODE', 'PANCHAYAT': 'PANCHAYAT', });
lyr_Kadakara1_2.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_Kadakara_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KERBLPAPRJ': 'Range', 'KERBLPAP_1': 'Range', 'CODE': 'Range', 'PANCHAYAT': 'TextEdit', });
lyr_Kadakara1_2.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_Kadakara_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KERBLPAPRJ': 'no label', 'KERBLPAP_1': 'no label', 'CODE': 'no label', 'PANCHAYAT': 'no label', });
lyr_Kadakara1_2.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_Kadakara1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});