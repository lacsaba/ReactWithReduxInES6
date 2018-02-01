import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

// Test a sync action
describe('Course Actions', () => {
  describe('createCourseSUCCESS', () => {
    it('should create CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course
      };

      // act
      const action = courseActions.createCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});

// todo: write a test case for an async action creator
