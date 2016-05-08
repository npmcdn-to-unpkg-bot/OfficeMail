import {Component, Input, NgClass, bootstrap} from '@angular/core';
import {Mail}  from "../../../services/mail";

@Component({
  selector: 'my-mail-detail',
  inputs: ['mail'],
  template: `
    <table>
      <tbody>
        <tr>
          <td class="col1">Subject</td>
          <td class="col2">{{mail.subject}}</td>    
          <td class="col3">From</td>
          <td class="col4"> {{mail.from}}</td>
        </tr>
        <tr>
          <td class="col1">Date</td>
          <td class="col2"> {{mail.date}}</td>    
          <td class="col3">to</td>
          <td class="col4"> {{mail.to}}</td>
        </tr>
      </tbody>
     </table>

     <div>
       <p>{{mail.content}}</p>
     </div>
  `,
  styles: [`

      table {
        width: 100%;
      }

      table, td {
        border: 1px solid black;
        border-collapse: collapse;
      }
      .col1: {
         width: 20%;
         font-weigth: bold;
      }
      .col2: {
         width: 30%;
      }
      .col3: {
         width: 20%;
         font-weigth: bold;
      }
      .col4: {
         width: 30%;
      }

      p {
        padding: 10px;
        word-wrap: break-word;
      }
  `],
})

export class MailDetailDirective {
  
}