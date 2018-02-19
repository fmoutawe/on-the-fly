'use strict';

import gulp from 'gulp';
import ts from 'gulp-typescript';

const tsProject = ts.createProject("tsconfig.json");

export const scripts = () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));};

export const build = gulp.series(scripts);

export default build;