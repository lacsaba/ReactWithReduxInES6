import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
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

// Test thunk
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES when loading courses', (done) => {
    // Example call to nock.
    // nock('http://example.com')
    //   .get('/courses')
    //   .reply(200, { body: {courses: [{id: 1, firstName: 'Cory', lastName: 'House'}]} });

    // arrange
    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];
    const store = mockStore({courses: []}, expectedActions);

    // act
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();

      // assert
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
