import { KeyValuePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { group } from 'console';

interface ICalcGroup {
  first: ICalcVar;
  second: ICalcVar;
  operation: CalcOperations;
}

interface ICalcVar {
  value: number;
  modifier: CalcModifiers;
}
enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/',
}

enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square',
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  standalone: false,
})
export class CalculatorComponent {
  public calcCalcOperations = CalcOperations;
  public calcModifiers = CalcModifiers;
  public calcGroups: ICalcGroup[] = [
    {
      first: {
        value: 1,
        modifier: CalcModifiers.none,
      },
      second: {
        value: 1,
        modifier: CalcModifiers.none,
      },
      operation: CalcOperations.multiply,
    },
  ];

  public addGroup(): void {
    this.calcGroups.push({
      first: {
        value: 0,
        modifier: CalcModifiers.none,
      },
      second: {
        value: 0,
        modifier: CalcModifiers.none,
      },
      operation: CalcOperations.plus,
    });

    this.operationsBetweenGroups.push(CalcOperations.plus);
  }

  public removeGroup(index: number): void {
    this.calcGroups.splice(index, 1);
  }

  public history: string[] = [];
  public operationsBetweenGroups: CalcOperations[] = [];

  public result?: number = undefined;

  public calcGroup() {
    let result = 0;

    let tempHistory: string[] = [];

    this.calcGroups.forEach((group, index) => {
      if (index === 0) {
        result = this.calc(
          this.calcValueWithModifier(group.first),
          this.calcValueWithModifier(group.second),
          group.operation
        );
      } else {
        let tempResult = this.calc(
          this.calcValueWithModifier(group.first),
          this.calcValueWithModifier(group.second),
          group.operation
        );
        result = this.calc(
          result,
          tempResult,
          this.operationsBetweenGroups[index - 1]
        );
      }

      tempHistory.push(`
      (
        ${
          group.first.modifier !== this.calcModifiers.none
            ? group.first.modifier
            : ''
        } ${group.first.value}
        ${group.operation}
        ${
          group.second.modifier !== this.calcModifiers.none
            ? group.second.modifier
            : ''
        } ${group.second.value}
      )
        `);
    });

    tempHistory.push(`${result}`);
    this.history.push(tempHistory.join(' '));
    this.result = result;
  }

  public calcValueWithModifier(value: ICalcVar) {
    switch (value.modifier) {
      case CalcModifiers.none:
        return value.value;
      case CalcModifiers.cos:
        return Math.cos(value.value);
      case CalcModifiers.sin:
        return Math.sin(value.value);
      case CalcModifiers.square:
        return Math.pow(value.value, 2);
    }
  }

  public calc(
    first: number,
    second: number,
    operation: CalcOperations
  ): number {
    switch (operation) {
      case CalcOperations.plus:
        return first + second;
      case CalcOperations.minus:
        return first - second;
      case CalcOperations.multiply:
        return first * second;
      case CalcOperations.divide:
        return first / second;
    }
  }
}
