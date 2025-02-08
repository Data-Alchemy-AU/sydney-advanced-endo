import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-test',
  imports: [
    MatIcon,
    MatMiniFabButton,
    MatDivider,
    MatIconButton,
    MatButtonModule
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
