import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CurrentTrainingComponent } from "./current-training/current-training.component";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { PastTrainingComponent } from "./past-training/past-training.component";
import { TrainingComponent } from "./training.component";
import { StopTrainingComponent } from "./current-training/stop-training.component";
import { SharedModule } from "../shared/shared.module";
//import { TrainingRoutingModule } from "./training-routing.module";

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent,
    SharedModule
  ],
  imports: [SharedModule, ReactiveFormsModule],
  exports: [],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule {}
