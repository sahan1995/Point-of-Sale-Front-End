import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerService} from "../customer.service";
import * as $ from 'node_modules/jquery'
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as faceapi from 'node_modules/face-api.js'
// import 'node_modules/face-recognition'
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})


export class CustomerComponent implements OnInit {

  constructor(private _customerSerive:CustomerService,private sanitizer:DomSanitizer) { }
  @ViewChild("id") idField ;
  public customers = [] ;
  public Cid;
  public name;
  public address;
  public selectFile:File=null;
  public imgPath;
  public userImage;
  public src = "../../../../../BackEnd/target/POS-1.0.0/WEB-INF/classes/uploads/wallpaper.wiki-Geek-Art-Wallpaper-PIC-WPD004393.png";

  imageData: any = null;
  sanitizedImageData: any = null;
  ngOnInit() {
    this.getTest();
    this.faceDetection();
    // $("#tbl").mouseenter(function(event){
    //
    //
    //   $("tbody").click(function (event) {
    //
    //      var id = ($(this).find("tr td").get(0)).innerHTML;
    //      var name = ($(this).find("tr td").get(1)).innerHTML;
    //      var address = ($(this).find("tr td").get(2)).innerHTML;
    //
    //      $("#Cusid").val(id)
    //      $("#name").val(name)
    //      $("#address").val(address)
    //
    //     // console.log(($(this).find("tr td").get(1)).innerHTML);
    //     // console.log(($(this).find("tr td").get(2)).innerHTML);
    //
    //   })
    //   $("#tbl").css("cursor", "pointer");
    //   // $("tbody").mouseenter(function () {
    //   //
    //   //   console.log($(this).find("tr"))
    //   //   $(this).find("tr").css("background-color","Red")
    //   // })
    //
    // })

  }

  getTest(){
    this._customerSerive.getCustomer().subscribe(data=>{

      this.customers = data;


    });

  }

  findByID(id){
   // this._customerSerive.findCustomerByID(id).subscribe(data=>{
   //   if(data==null){
   //
   //     alert("No Customer found ");
   //
   //   }else{
   //   this.Cid = data["id"]
   //   this.name = data["name"]
   //   this.address = data["address"]
   //   this.userImage = data["imageName"]
   //     console.log(this.userImage)
   //     this.getFile(this.userImage);
   //   }
   //
   // })
  }


  saveCustomer(cusID, userForm){
    const customerF = userForm.value;
    const formData = new FormData();
    console.log(customerF)
    formData.append('user',JSON.stringify(customerF));
    formData.append('fileName',this.userFile.name);
    console.log(formData);
    this.uploadFile();
    this._customerSerive.save(cusID,formData).subscribe((response)=>{
      console.log(response);

    })

    // this._customerSerive.saveCustomer(cusID,customerF).subscribe(data=>{
    //   this.getTest();
    //   userForm.reset();
    //   this.idField.nativeElement.focus();
    // });
  }


  updateCustomer(cusID,customerC){

    let customers = customerC.value;
    const formData = new FormData();
    // console.log(customerF)
    formData.append('user',JSON.stringify(customers));
    formData.append('fileName',this.userImage);
    this._customerSerive.updateCustomer(cusID,formData).subscribe(data=>{
      this.getTest();
      customerC.reset();
      this.localUrl = null;
      this.idField.nativeElement.focus();
    })
  }

  deleteCustomer(cid){



    // $.confirm({
    //   title: 'Modern POS',
    //   content: 'Are you Sure ? ',
    //   buttons: {
    //     confirm: function () {
    //
    //         console
    //
    //
    //
    //     },
    //     cancel: function () {
    //
    //     },
    //
    //   }
    // });



    this._customerSerive.deleteCustomer(cid).subscribe(data=>{
      if(data){
        alert(" Customer Removed ");
        this.getTest();

      }
    })
  }


  onSelectFile(event){
    const file = event.target.files[0];
    console.log(file);
    this.userFile = file;
  }


  rowClick(cust){
    this.Cid = cust.id;
    this.name = cust.name;
    this.address = cust.address;
    this.findByID(this.Cid)
  }

  mouseOver(){
    $("#tbl").css("cursor", "pointer");
  }

  localUrl: any[];
  showPreviewImage(event: any) {
    const file = event.target.files[0];
    console.log(file);
    this.userFile = file;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;

        console.log(this.localUrl);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }




  @ViewChild("myFile")
  myFile: ElementRef;
  uploadFile():void{
    let  file = this.myFile.nativeElement.files[0];
    if(file){
      this._customerSerive.uploadFile(file).subscribe(result=>{
        if(result){
          alert("file Uploaded")
        }else{
          alert("File not Uploaded")
        }
      })
    }
  }

public  img:any;
  getFile(fileName){

    this._customerSerive.getFile(fileName).subscribe(data=>{

      // this.createImageFromBlob(data)
    this.createImageFromBlob(data)
    })
  }



  imageToShow: any;

  createImageFromBlob(image) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.localUrl = reader.result;
      // console.log(this.localUrl)
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  faceDetection(){



  }
}


