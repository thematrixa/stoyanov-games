import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'banned-card',
    pure: false
})
export class BannedCardPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.ban_tcg.indexOf(filter.ban_tcg) !== -1);
    }
}