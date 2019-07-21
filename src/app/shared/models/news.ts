import { formatDate } from '@angular/common';

export class News {
    id: number;
    title: string;
    content: string;
    date = formatDate(new Date(), 'dd.MM.yyyy ', 'en');
}
