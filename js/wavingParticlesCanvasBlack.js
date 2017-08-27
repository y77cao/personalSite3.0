            var SEPARATION2 = 80, AMOUNTX2 = 20, AMOUNTY2 = 40;
			var container2;
			var camera2, scene2, renderer2;
			var particles2, particle2, count2 = 0;
			var mouseX2 = 0, mouseY2 = 0;
			var windowHalfX2 = window.innerWidth / 2;
			var windowHalfY2 = window.innerHeight / 2;

			init();
			animate();

			function init() {
				container2 = document.getElementById('canvas2');
				//document.body.appendChild( container );
				camera2 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
				camera2.position.z = 1000;
				scene2 = new THREE.Scene();
				particles2 = new Array();
				var PI2 = Math.PI * 2;
				var material = new THREE.SpriteCanvasMaterial( {
					color: 0x000000,
					program: function ( context ) {
						context.beginPath();
						context.arc( 0, 0, 0.5, 0, PI2, true );
						context.fill();
					}
				} );

				var i = 0;
				for ( var ix = 0; ix < AMOUNTX2; ix ++ ) {
					for ( var iy = 0; iy < AMOUNTY2; iy ++ ) {
						particle2 = particles2[ i ++ ] = new THREE.Sprite( material );
						particle2.position.x = ix * SEPARATION2 - ( ( AMOUNTX2 * SEPARATION2 ) / 2 );
						particle2.position.z = iy * SEPARATION2 - ( ( AMOUNTY2 * SEPARATION2 ) / 2 );
						scene2.add( particle2 );
					}
				}
				renderer2 = new THREE.CanvasRenderer();
				renderer2.setPixelRatio( window.devicePixelRatio );
				renderer2.setSize( container2.offsetWidth , container2.offsetHeight );
				container2.appendChild( renderer2.domElement );
				//document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				//document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				//document.addEventListener( 'touchmove', onDocumentTouchMove, false );
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}

			function onWindowResize() {
				windowHalfX2 = window.innerWidth / 2;
				windowHalfY2 = window.innerHeight / 2;
				camera2.aspect = window.innerWidth / window.innerHeight;
				camera2.updateProjectionMatrix();
				renderer2.setSize( window.innerWidth, window.innerHeight );
			}
			//
			function animate() {
				requestAnimationFrame( animate );
				render();
			}

			function render() {
				camera2.position.x += ( mouseX2 - camera2.position.x ) * .05;
				camera2.position.y += ( - mouseY2 - camera2.position.y ) * .05;
				camera2.lookAt( scene2.position );
				var i = 0;
				for ( var ix = 0; ix < AMOUNTX2; ix ++ ) {
					for ( var iy = 0; iy < AMOUNTY2; iy ++ ) {
						particle2 = particles2[ i++ ];
						particle2.position.y = ( Math.sin( ( ix + count2 ) * 0.5 ) * 70 ) +
							( Math.sin( ( iy + count2 ) * 0.5 ) * 70 );
						particle2.scale.x = particle2.scale.y = ( Math.sin( ( ix + count2 ) * 0.6 ) + 1 ) * 4 +
							( Math.sin( ( iy + count2 ) * 1.1 ) + 1 ) * 4;
					}
				}
				renderer2.render( scene2, camera2 );
				count2 += 0.05;
			}