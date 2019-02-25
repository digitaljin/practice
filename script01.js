window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('canvas');

    var engine = new BABYLON.Engine(canvas, true);
    engine.enableOfflineSupport = false; // Dont require a manifest file
    var createScene = function(){
        var scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3.White();


        var camera = new BABYLON.ArcRotateCamera("arcCam",
                BABYLON.Tools.ToRadians(0),
                BABYLON.Tools.ToRadians(0),
                10.0,BABYLON.Vector3.Zero(),scene);
        camera.attachControl(canvas,true);
        var light = new BABYLON.PointLight("PointLight",new BABYLON.Vector3(
        0,0,0),scene);
        light.parent = camera;
        light.intensity = 1.5;

        BABYLON.SceneLoader.ImportMesh("","","jupiter.babylon",
        scene,function(newMeshes) {
            newMeshes.forEach(function(mesh){
                mesh.rotation = new BABYLON.Vector3(BABYLON.Tools.ToRadians(
                45),0,0);
            }                );
        });

        return scene;
    }

    var scene = createScene();
    engine.runRenderLoop(function(){
        scene.render();
    });

});