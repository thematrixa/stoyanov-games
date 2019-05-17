import { Pipe, PipeTransform } from '@angular/core';
import { BannedCardFilter } from '../models/banned-card-filter';

@Pipe({
    name: 'isBannedCard',
    pure: false
})
export class BannedCardPipe implements PipeTransform {
    transform(items: any[], filter: BannedCardFilter): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.ban_tcg.indexOf(filter.ban_tcg) !== -1);
    }
}