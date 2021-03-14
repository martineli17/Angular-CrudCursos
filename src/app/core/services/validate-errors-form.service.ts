import { Injectable } from "@angular/core";
import { FormGroup, ValidationErrors } from "@angular/forms";
import { ValidationErrosKeys } from "../models/errorsForm";

@Injectable({ providedIn: "root" })
export class ValidateErrorsFormService{
    GetFormValidationErrors(formGroup: FormGroup, keysLabels: ValidationErrosKeys[]):string {
        let errorMessage = "";
        Object.keys(formGroup.controls).forEach(key => {
            let controlErrors: ValidationErrors = formGroup.get(key).errors;
            if (controlErrors != null)
                Object.keys(controlErrors).forEach(keyError => {
                    if (keyError === "required")
                        errorMessage += `\n'${keysLabels.find(x => x.Name === key).Label}' precisa ser informado.`;
                    else if (keyError === "min")
                        errorMessage += `\nO valor mínimo para '${keysLabels.find(x => x.Name === key).Label}' é de ${controlErrors[keyError].min}.`;
                    else if (keyError === "max")
                        errorMessage += `\nO valor máximo para '${keysLabels.find(x => x.Name === key).Label}' é de ${controlErrors[keyError].max}.`;
                    else if (keyError === "minlength")
                        errorMessage += `\n''${keysLabels.find(x => x.Name === key).Label}' precisa ter no mínimo ${controlErrors[keyError].requiredLength} caracteres.`;
                    else if (keyError === "maxlength")
                        errorMessage += `\n'${keysLabels.find(x => x.Name === key).Label}' precisa ter no máximo ${controlErrors[keyError].requiredLength} caracteres.`;
                        else if (keyError === "email")
                        errorMessage += `\n'${keysLabels.find(x => x.Name === key).Label}' contém um e-mail inválido.`;
                });
        });
        return errorMessage;
    }
}