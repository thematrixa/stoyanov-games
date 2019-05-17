import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'banned-card',
    pure: false
})
export class BannedCard implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.title.indexOf(filter.ban_tcg) !== -1);
    }
}