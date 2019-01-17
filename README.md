# Ataa_slider
simple image gallery slider widget 


<img src = "http://develop.netmechanics.net/uploads/myslider.PNG">

can handle unlimited number of images with out 
building a 'div' for each image
<hr>
<h4>Dependancis:</h4>
<ul>
<li>jquery 3.3.1</li>
<li>bootstrap 3.3.7</li>
</ul>


<hr>

<h4>Get start:</h4>

**HTML code**
slider div with an ID

```
  <div id="{slider ID}">
    <!-- images -->
    <div  data-src="../test_imgs/img1.png" data-desc="this is the test image number 1" data-name="image No.1" ></div>
    <div  data-src="../test_imgs/img2.png" data-desc="this is the test image number 2" data-name="image No.2" ></div>
    <div  data-src="../test_imgs/img3.png" data-desc="this is the test image number 3" data-name="image No.3" ></div>
    <!--end of images-->
  </div>
```

each image should be set as div directly under the slider div with following structure
```
<div  
    data-src="{image link}" 
    data-desc="{image description}" 
    data-name="{image name}" >
</div>
```
**JS code**

```
 $('{slider ID}').ataaSlider({
                                shownames: true,
                                height: '400',
                                controlheight: '100',
                                speed:500,
                                openImage: true
                              });
```

<h5>Options:</h5>
  **shownames:** show image names on the left-bottom corner <span style="color:darkblue">default 'true'</span>,
  
  **height:**  the height of images section in pixel <span style="color:darkblue">default '500'</span>,
  
  **controlheight:** the height of control section in pixel <span style="color:darkblue">default '100'</span>,
  
  **speed:** slider animation speed in millisecond <span style="color:darkblue">500</span>,
  
  **openImage:** open images on full screen when clicked <span style="color:darkblue">default 'true'</span>
  

### credit

Credit of this project goes to <a href = "http://netmechanics.net" target="_blank" >NetMechanics</a> -- <a href="http://mahmoud.alghool.net" target="_blank" >ENG\ Mahmoud Alghool</a>


### License

This project is licensed under the GNU License - see the [LICENSE.md](LICENSE.md) file for details