import { Pipe, PipeTransform } from '@angular/core';
import { BannedCardFilter } from '../models/banned-card-filter';
import { CardInfo } from '../models/card-info';

@Pipe({
    name: 'isBannedCard',
    pure: false
})
export class BannedCardPipe implements PipeTransform {
    transform(items: Array<CardInfo>, filter: BannedCardFilter): any {
        if (!items || !filter) {
            return items;
        }
        if (items.length < 100) {
            return items;
        }
        return items.filter(item => item.ban_tcg.toLowerCase().includes(filter.ban_tcg) !== false);
    }
}