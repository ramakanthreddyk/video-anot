import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotationsPlayerComponent } from './Annotations-player.component';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MinuteSecondsPipe } from '../_pipes/date.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgOverlayPlayModule,
        VgControlsModule,
        MatTableModule,
        MatSelectModule,
        MatIconModule,
        MatDialogModule,
        MatCardModule
    ],
    declarations: [ AnnotationsPlayerComponent, MinuteSecondsPipe ],
    exports: [AnnotationsPlayerComponent]
})
export class AnnotationsPlayerModule {
}
