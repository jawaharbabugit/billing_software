import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid:string = "Dummy";
  password:string = "Dummy";
  locked:boolean = true;
  unlocked:boolean = false;

  constructor(private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }



  onSubmit(data:any){
    console.log(data)
    if(data.userid == 'gautham@pinesphere.com' && data.password == 'pinesphere'){
      this.toastr.success('Login Successful')
      this.locked = false;
      this.unlocked = true;      
      setTimeout(()=>{ this.router.navigate(['/']);}, 2000)
    }
    else this.toastr.error('Invalid UserId or Password');
  }

}
