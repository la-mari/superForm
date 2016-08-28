console.log("js page linked");

var scalar = 200;
var m = 2;
var n1 = 18;
var n2 = 1;
var n3 = 1;

function setup() {
	createCanvas(1200, 600);
	noFill();
	stroke(255, 120);
}

function draw(){
	background(0);
	drawShape(width/2, height/2);
	
}

function drawShape(x, y){
	push();
	translate(x, y);

	var newScalar = scalar;
	for(var s = 16; s > 0; s--){
		beginShape();

		var mm = m + s;
		var nn1 = n1 + s;
		var nn2 = n2 + s;
		var nn3 = n3 + s;
		newScalar = newScalar * 0.98;
		var sscalar = newScalar;

		var points = superForm(mm, nn1, nn2, nn3);
		curveVertex(points[points.length-1].x * sscalar, points[points.length-1].y * sscalar);
		for (var i = 0; i < points.length; i++){
			curveVertex(points[i].x * sscalar, points[i].y * sscalar);
		}
		curveVertex(points[0].x * sscalar, points[0].y * sscalar);
		endShape();
	}
	pop();
}

function superForm(m, n1, n2, n3){
	var numPoints = 360;
	var phi = TWO_PI / numPoints;
	var points = [];
	for (var i=0; i<=numPoints; i++){
		points[i] = superFormPoint(m, n1, n2, n3, phi*i);
	}
	return points;
}

function superFormPoint(m, n1, n2, n3, phi){
	var r;
	var t1, t2;
	var a=1, b=1;
	var x=0;
	var y=0;

	t1=cos(m*phi/4)/a;
	t1=abs(t1);
	t1=pow(t1,n2);

	t2=sin(m*phi/4)/b;
	t2=abs(t2);
	t2=pow(t2,n3);

	r=pow(t1*t2, 1/n1);
	if(abs(r) == 0) {
		x=0;
		y=0;
	}
	else {
		r=1/r;
		x=r*cos(phi);
		y=r*sin(phi);
	}
	return new p5.Vector(x, y);

}

