import { expect, test } from 'vitest';
import { findNextDueDate } from "../../../src/components/utils/repeats.ts";
import { Priority } from '../../../src/dataModel/todo.ts';
import dayjs from 'dayjs';

test('findNextDueDate finds the next possible due date', () => {
    // Given
    const dueDate = dayjs("2999-12-31");
    let todo = {
        id: "testid",
        description: "",
        dueDate: dueDate,
        completed: false,
        caption: "testing",
        priority: Priority.Medium,
        repeats: [false, false, false, true, false, false, false],
    }
    // when 
    const nextDueDate = findNextDueDate(todo);
    // Then 
    expect(nextDueDate.format()).toBe(dayjs("3000-01-01").format());
});


test('findNextDueDate returns null, if there is no repeat', () => {
    // Given
    let todo = {
        id: "testid",
        description: "",
        completed: false,
        caption: "testing",
        priority: Priority.Medium,
        repeats: [false, false, false, false, false, false, false],
    }
    // when 
    const nextDueDate = findNextDueDate(todo);
    // Then 
    expect(nextDueDate).toBe(null);
});

