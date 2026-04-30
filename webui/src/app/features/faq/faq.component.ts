import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-faq',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    {
      question: 'Come aggiungo un cliente?',
      answer: 'Vai nella sezione clienti e clicca su "Aggiungi nuovo".'
    },
    {
      question: 'Come apro un ticket assistenza?',
      answer: 'Accedi alla sezione ticket e premi su "Nuovo ticket".'
    },
    {
      question: 'Posso modificare una linea?',
      answer: 'Sì, entra nella scheda cliente e modifica i dati della linea.'
    },
    {
      question: 'I dati sono sicuri?',
      answer: 'Sì, utilizziamo sistemi di sicurezza avanzati e backup automatici.'
    }
  ];

  activeIndex: number | null = null;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}

