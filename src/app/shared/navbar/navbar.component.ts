// import { Component } from '@angular/core';
// import { CommonModule, NgIf } from '@angular/common';
// import { Router, RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [CommonModule, RouterLink, NgIf],
//   template: `
//     <!-- <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary shadow-sm gm-effect"> -->
//     <nav class="navbar navbar-expand-lg shadow-sm gm-effect">
//       <div class="container-fluid">
//         <a class="navbar-brand d-flex align-items-center" routerLink="/home">
//           <span class="h5 mb-0">SSME</span>
//         </a>

//         <button class="navbar-toggler" type="button" (click)="collapsed = !collapsed"
//           [attr.aria-expanded]="!collapsed" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse" [class.show]="!collapsed" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                 <!-- <li class="nav-item"><a class="nav-link" routerLink="/home" routerLinkActive="active">Dashboard</a></li>
//                 <li class="nav-item"><a class="nav-link" routerLink="/document-entry" routerLinkActive="active">Document Entry</a></li>
//                 <li class="nav-item"><a class="nav-link" routerLink="/document-category" routerLinkActive="active">Document Category</a></li>
//                 <li class="nav-item"><a class="nav-link" routerLink="/reports" routerLinkActive="active">Reports</a></li> -->
//             </ul>

//             <div class="d-flex align-items-center">
//               <ng-container *ngIf="(auth.currentUser$ | async) as user; else guest">
//                 <div class="dropdown">
//                   <a class="dropdown-toggle d-flex btn align-items-center" role="button" (click)="menuOpen = !menuOpen">
//                     <i class="fa-regular fa-circle-user"></i>&nbsp;
//                     <strong>{{ user.userName }}</strong>
//                   </a>
//                   <ul class="dropdown-menu dropdown-menu-end" [class.show]="menuOpen">
//                     <!-- <li><a class="dropdown-item" routerLink="/profile">My profile</a></li>
//                     <li><a class="dropdown-item" routerLink="/settings">Settings</a></li> -->
//                     <li>
//                       <a class="dropdown-item" routerLink="/change-password" (click)="closeToggleMenu()">Change Password</a>
//                     </li>
//                     <li><hr class="dropdown-divider"></li>
//                     <li><button class="dropdown-item text-danger" (click)="logout()">Logout</button></li>
//                   </ul>
//                 </div>
//               </ng-container>

//               <ng-template #guest>
//                 <!-- <a class="btn btn-outline-primary btn-sm" routerLink="/login">Sign in</a> -->
//               </ng-template>
//             </div>
//         </div>
//       </div>
//     </nav>
//   `,
//   styles: [`
// /* small visual tweaks */
// .navbar { position: relative; z-index: 1000;}
// .navbar-brand .h5 { letter-spacing: .5px; }
// .dropdown-menu { min-width: 12rem; }
// img.rounded-circle { object-fit: cover; }
// .gm-effect{
//   /* From https://css.glass */
//   background: rgba(255, 255, 255, 0.2);
//   //border-radius: 16px;
//   box-shadow: 0 1px 15px rgba(0, 0, 0, 0.3) !important;
//   backdrop-filter: blur(2px);
//   -webkit-backdrop-filter: blur(5.1px);
//   border: 1px solid rgba(255, 255, 255, 166.38);
// }
// `]
// })
// export class NavbarComponent {
//   collapsed = true;
//   menuOpen = false;
//   avatarUrl = 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png';
//   //username?: string | null;
//   //isLoggedIn: boolean;

//   constructor(
//     private router: Router
//   ) {  
//     //this.isLoggedIn = auth.isLoggedIn();  
//   }
  
//   // ngOnInit(){
//   //   this.isLoggedIn = this.auth.isLoggedIn();
//   //   this.username = this.auth.getCurrentUser?.()?.userName ?? null;
//   // }

//   closeToggleMenu(){
//     this.menuOpen = false;
//   }

//   logout() { 
//     this.closeToggleMenu();
//   }
// }
