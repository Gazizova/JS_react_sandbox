$(function() {
  $('.input-group.date').datepicker({ format: 'dd/mm/yyyy' });

  // add search in selects with static data
  $('.selectpicker').select2({
    width: '100%',
    placeholder: ''
  });

  $('.multiple-select').select2({ width: '100%' });

  $('.multiple-select').each(function(){
    
    var trigger = $(this).siblings('small[data-action="choose-all-types"]');

    if ($(this).find('option').length == $(this).find('option:selected').length) {
      trigger.text('Clear all types').attr('data-selected', true)
    }
  });

  $('#downloadProjects-form small').on('click', function(){

    var isSelected = ($(this).attr('data-selected') === "true");
    var isAction = $(this).attr('data-action');
    var $select = $(this).siblings('.multiple-select');
    var $elCollapse = $(this).siblings('small[data-action="collapse-types"]');
    var $list = $(this).siblings('.select2-container').find('.select2-selection ul');

    if (!isSelected) {

      if (isAction === "choose-all-types") {

        $(this).text('Clear all types').attr('data-selected', true);

        $elCollapse.removeClass('hide').attr('data-selected', true);
          
        $select.find('option').each(function(){
          $(this).prop("selected","selected");
        });

      } else {

        $list.css('height', 'auto');

        $(this).text('Collapse types');
      }

    } else {

      if (isAction === "choose-all-types") {

        $(this).text('Choose all types').attr('attr-selected', false);

        $elCollapse.addClass('hide').text('Collapse types').attr('data-selected', false);
  
        $list.css('height', 'auto');
        
        $select.find('option').each(function(){
          $(this).removeAttr("selected");
        });

      } else {

        $list.css('height', '325px');

        $(this).text('Expand types');
      } 
    }

    $select.trigger('change');

    $(this).attr('data-selected', !isSelected);
  });

  function clientTmpl(repo) {
    if (repo.loading) return repo.text;

    return "<div class='select2-result'>" + repo.text + '</div>';
  }

  function clientTmplSelection(repo) {
    if (repo) {
      return (
        "<div class='select2-result' data-client='" +
        repo.id +
        "'>" +
        repo.text +
        '</div>'
      );
      
    } else {
      return repo.text;
    }
  }

  $('.client-picker').select2({
    multiple: true,
    ajax: {
      type: 'POST',
      url: 'list.html?ajaxSuggestion=true',
      dataType: 'json',
      delay: 500,
      data: function(params) {
        return {
          client: params.term,
          pageSize: 100,
          page: 1
        };
      },
      processResults: function(data, params) {

        var clients = $.map(data || [], function(name, id) {
          return {
            text: name, 
            id: name
          };
        });

        return { results: clients };
      }
    },
    placeholder: '',
    width: '100%',
    escapeMarkup: function(markup) {
      return markup;
    },
    minimumInputLength: 1,
    templateResult: clientTmpl,
    templateSelection: clientTmplSelection
  });

  $('.property-picker').select2({
    ajax: {
      type: 'POST',
      url: 'list.html?ajaxSuggestion=true',
      dataType: 'json',
      delay: 500,
      data: function(params) {
        return {
          property: params.term
        };
      },
      processResults: function(data, params) {
        
        var properties = $.map(data || [], function(name, id) {
          return {
            text: name, 
            id: name
          };
        });

        return { results: properties };
      }
    },
    allowClear: true,
    placeholder: '',
    width: '100%',
    escapeMarkup: function(markup) {
      return markup;
    },
    minimumInputLength: 1,
    templateResult: propertyTmpl,
    templateSelection: propertyTmplSelection
  });

  function propertyTmpl(repo) {
    if (repo.loading) return repo.text;

    return "<div class='select2-result'>" + repo.text + '</div>';
  }

  function propertyTmplSelection(repo) {
    if (repo) {
      return (
        "<div class='select2-result' data-property='" +
        repo.id +
        "'>" +
        repo.text +
        '</div>'
      );
    } else {
      return repo.text;
    }
  }

  // charts
  var commonChartOptions = {
    animation: true,
    responsive: true,
    animationSteps: 30,
    animationEasing: 'easeOutQuart',
    maintainAspectRatio: false
  };

  var colors = [
    { color: 'blue', highlight: '#2525F5' },
    { color: '#F7464A', highlight: '#F37477' },
    { color: 'grey', highlight: '#A7A4A4' },
    { color: '#FDB45C', highlight: '#FBC789' },
    { color: '#1DB45C', highlight: '#1FC870' },
    { color: '#46BFBD', highlight: '#5AD3D1' },
    { color: '#a4abe1', highlight: '#BABEDA' },
    { color: '#eb04da', highlight: '#DE5FD5' },
    { color: '#393', highlight: '#4BCA4B' },
    { color: '#c72845', highlight: '#F33255' },
    { color: '#28ca43', highlight: '#34F554' }
  ];
  var canvas1 = document.getElementById('myChart1');
  var canvas2 = document.getElementById('myChart2');
  var canvas3 = document.getElementById('myChart3');

  if (!canvas1 || !canvas2 || !canvas3) {
    return;
  }

  /* Doughnut chart with legend */
  var ctx1 = canvas1.getContext('2d');
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  var helpers = Chart.helpers;
  var moduleDoughnut;
  var legendHolder = document.createElement('div');
  canvas1.parentNode.parentNode.appendChild(legendHolder);
  legendHolder.className = 'col-xs-5 legend-container';

  $(window).on('graphicsdata', function(e, data) {
    var d = data.projectDiagram1.list.map(function(pair, i) {
      return {
        value: pair.value,
        color: (colors[i] || colors[0]).color,
        highlight: (colors[i] || colors[0]).highlight,
        label: pair.name
      };
    });

    if (moduleDoughnut) {
      moduleDoughnut.clear();
      moduleDoughnut.destroy();
    }
    moduleDoughnut = new Chart(ctx1).Doughnut(d, commonChartOptions);
    legendHolder.innerHTML = moduleDoughnut.generateLegend();

    // Include a html legend template after the module doughnut itself
    helpers.each(legendHolder.firstChild.childNodes, function(legendNode, index) {
      helpers.addEvent(legendNode, 'mouseover', function() {
        var activeSegment = moduleDoughnut.segments[index];
        activeSegment.save();
        activeSegment.fillColor = activeSegment.highlightColor;
        moduleDoughnut.showTooltip([activeSegment]);
        activeSegment.restore();
      });
    });
    helpers.addEvent(legendHolder.firstChild, 'mouseout', function() {
      moduleDoughnut.draw();
    });
  });

  /* Bar charts */
  var ctx2 = canvas2.getContext('2d');
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  var myBarChart;
  $(window).on('graphicsdata', function(e, data) {
    if (myBarChart) {
      myBarChart.clear();
      myBarChart.destroy();
    }
    var d = {
      labels: _.keys(data.projectDiagram2.values),
      datasets: [
        {
          fillColor: 'rgba(151,187,205,0.5)',
          strokeColor: 'rgba(151,187,205,0.5)',
          highlightFill: 'rgba(151,187,205,0.5)',
          highlightStroke: 'rgba(151,187,205,0.5)',
          label: data.projectDiagram2.name,
          data: _.values(data.projectDiagram2.values)
        }
      ]
    };
    myBarChart = new Chart(ctx2).Bar(d, _.extend({ scaleBeginAtZero: true }, commonChartOptions));
  });

  var ctx3 = canvas3.getContext('2d');
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  var myBarChart2;
  $(window).on('graphicsdata', function(e, data) {
    if (myBarChart2) {
      myBarChart2.clear();
      myBarChart2.destroy();
    }
    var d = {
      labels: _.pluck(data.projectDiagram3.list, 'name'),
      datasets: [
        {
          fillColor: 'rgba(151,187,205,0.5)',
          strokeColor: 'rgba(151,187,205,0.5)',
          highlightFill: 'rgba(151,187,205,0.5)',
          highlightStroke: 'rgba(151,187,205,0.5)',
          label: data.projectDiagram2.name,
          data: _.pluck(data.projectDiagram3.list, 'value')
        }
      ]
    };
    myBarChart2 = new Chart(ctx3).Bar(d, _.extend({ scaleBeginAtZero: true }, commonChartOptions));
  });

  /* Update chart titles */
  $(window).on('graphicsdata', function(e, data) {
    var $charts = $('#charts-row > .chart-container');

    $charts
      .eq(0)
      .find('div.header-page h3')
      .html(data.projectDiagram1.name);
    $charts
      .eq(2)
      .find('div.header-page h3')
      .html(data.projectDiagram2.name);
    $charts
      .eq(1)
      .find('div.header-page h3')
      .html(data.projectDiagram3.name);
  });

  $(window).on('cleargraphics', function() {
    moduleDoughnut.clear().destroy();
    myBarChart.clear().destroy();
    myBarChart2.clear().destroy();
    $('.legend-container').remove();
    $('#charts-row').addClass('hide');
  });
});

$('[data-target="statistics"]').on('click', function(e) {
  e.preventDefault();

  renderStatistics();
});

$('[data-target="list"]').on('click', function(e) {
  e.preventDefault();

  if ($('#tasks-table').is(':visible')) {
    $(window).trigger('cleartable');
  }

  drawTasksTable();
});

drawTasksTable();

function grabFilters() {
  pageInfo = window.pageInfo || { pageSize: 5 };

  var searchFields = [],
    ajaxFields = ['pageSize', 'page', 'sortField', 'orderAsc', 'searchValue'],
    fields = {};

  $('form')
    .find(':input')
    .each(function() {
      if (!this.name) {
        return;
      }
      var val = $(this).val();

      if (this.type == 'checkbox') {
        fields[this.name] = $(this).is(':checked');
      } else if (this.type.indexOf('select') >= 0) {
        fields[this.name] = _.isArray(val) ? val.join(', ') : val;
      } else {
        fields[this.name] = val;
      }
    });

  searchFields = _.keys(fields);
  _.extend(pageInfo, fields);

  return _.pick(pageInfo, _.union(ajaxFields, searchFields));
}

function renderStatistics() {
  $('.disable-bg').show();

  if ($('#downloadProject-btn, #tasks-table').is(':visible')) {
    $(window).trigger('cleartable');
    $('#downloadProject-btn, #tasks-table').addClass('hide');
  }

  $.ajax({
    url: 'list.html?ajaxRequest=true&renderStatistics=true',
    data: grabFilters(),
    type: 'POST'
  }).done(function(data) {
    $('#charts-row').removeClass('hide');
    $(window).trigger('graphicsdata', JSON.parse(data));

    $('.disable-bg').hide();
  });
}

function drawTasksTable() {
  $('.disable-bg').show();

  if ($('#charts-row').is(':visible')) {
    $(window).trigger('cleargraphics', null);
  }

  var $table = $('#tasks-table').dataTable({
    ajax: function(data, callback, settings) {
      var order = (data.order || [])[0]; // Get only first order criterion set by user

      /* Prepare parameters for server */
      pageInfo.page = parseInt(data.start / pageInfo.pageSize) + 1;
      pageInfo.sortField = data.columns[order.column].data;
      pageInfo.orderAsc = order.dir == 'asc';
      pageInfo.searchValue = data.search.value ? data.search.value : undefined;

      $.post(
        'list.html?ajaxRequest=true',
        grabFilters(),
        function(r) {
          r.pageSize = r.pageSize || pageInfo.pageSize;
          _.extend(pageInfo, r);

          /* Prepare response for datatables */
          var res = {
            data: r.records || [],
            draw: data.draw,
            recordsTotal: r.pageResult.totalCount,
            recordsFiltered: r.pageResult.totalCount
          };
          callback(res);

          $('.disable-bg').hide();
        },
        'json'
      ).fail(function(xhr, error, text) {
        //if (text.startsWith('SyntaxError'))
        if (xhr.status == 401 || xhr.status == 200) {
          window.location.reload();
        } else {
          $('div.alert-danger').remove();
          $(
            '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
              '<strong>' +
              xhr.status +
              '.</strong> ' +
              text +
              '</div>'
          ).insertBefore($('#tasks-table'));
        }
      });
    },

    columns: [
      {
        data: 'dueDate',
        render: function(data, type, full) {
          return full.overdue
            ? '<span class="glyphicon glyphicon-exclamation-sign text-danger"></span>'
            : '';
        }
      },
      {
        data: 'dueDate',
        render: function(data, type, full) {
          return full.due;
        }
      },
      {
        data: 'visitDateFrom',
        render: function(data, type, full) {
          return full.visitDateFrom;
        }
      },
      {
        data: 'visitDateTo',
        render: function(data, type, full) {
          return full.visitDateTo;
        }
      },
      { data: 'type' },
      { data: 'stage' },
      {
        data: 'code',
        render: function(data, type, full) {
          if (canEditTask) {
            return (
              '<a class="truncated sm" href="edit.html?taskId=' +
              full.codeUrl +
              '">' +
              full.code +
              '</a>'
            );
          } else {
            return full.code;
          }
        }
      },
      {
        data: 'client',
        render: function(data, type, full) {
          return '<span class="truncated sm">' + full.client + '</span>';
        }
      },
      {
        data: 'property',
        render: function(data, type, i, meta) {
          return _.without(
            [
              i.property.address1,
              i.property.address2,
              i.property.address3,
              i.property.address4,
              i.property.address5,
              i.property.postCode
            ],
            null,
            '',
            ' '
          ).join(',<br />');
        }
      },
      {
        data: 'consultant',
        orderable: false,
        render: function(data, type, full) {
          if (full.consultant) {
            return full.consultant
              .map(function(obj) {
                return obj.name + ' ' + '(' + obj.role + ')';
              })
              .join('<br />');
          } else {
            return full.consultant;
          }
        }
      }
    ],
    bStateSave: true,
    serverSide: true,
    pageLength: pageInfo.pageSize,
    lengthChange: false,
    searching: false,
    deferLoading: 0,
    responsive: true
  });

  $(window).on('cleartable', function() {
    $('#tasks-table')
      .DataTable()
      .destroy();
    $('#tasks-table tbody').empty();
    $('#tasks-table, #downloadProject-btn').addClass('hide');
  });

  $table.DataTable().ajax.reload(function(json) {
    console.log('table refreshed with user search results');
    $('#downloadProject-btn, #tasks-table').removeClass('hide');
    $('.disable-bg').hide();
  });
}

//clear all search fields
$('#clear-all').on('click', function() {

  $('#downloadProjects-form')
    .find(':input')
    .each(function() {
      if (!this.name) {
        return;
      }

      if (this.type.indexOf('select') >= 0) {
        $(this)
          .find(':selected')
          .prop('selected', false);

        if ($(this).hasClass('selectpicker')) {
          $(this)
            .val(null)
            .trigger('change');
        } else if ($(this).hasClass('select2-dropdown')) {
          $(this)
            .val(null)
            .trigger('change')
            .find('option:not(.empty-option)')
            .remove();
        }
      } else if (this.type == 'checkbox') {
        $(this).removeAttr('checked');
      } else {
        $(this).val('');
      }
    });
});

//show modal while file is downloading
$('#downloadProject-btn').on('click', function() {
  $('.disable-bg').show();

  showWaitingModal();
});

function showWaitingModal() {
  var remote = $.ajax({
    type: 'POST',
    data: $('#downloadProjects-form').serializeArray(),
    url: '/operational/downloadProjectsCsv',
    xhrFields: {
      withCredentials: true
    },
    success: function downloadFile(result) {
      var supportsDownloadAttribute = 'download' in document.createElement('a');

      if (supportsDownloadAttribute) {
        console.log('I supports download attribute');
        var blob = new Blob([result]);
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'project.csv';
        link.click();
      } else if (typeof safari !== 'undefined') {
        console.log('I am safari!');
        //var downloadLink = document.createElement('a');
        //downloadLink.setAttribute('href', 'data:application/octet;charset=utf-8,' + encodeURIComponent(result));
        //downloadLink.setAttribute('download', "project.csv");
        //
        //downloadLink.click();

        var blob = new Blob([result]);
        var link = document.createElement('a');
        link.href = 'data:application/octet;charset=utf-8,' + window.URL.createObjectURL(blob);
        link.download = 'project.csv';
        link.click();
      } else {
        console.log('I can use blobs!');
        var blob = new Blob([result], { data: 'attachment/csv;charset=utf-8;' });
        saveAs(blob, 'project.csv');
      }

      $('.disable-bg').hide();
    }
  });
  console.log(remote);

  return remote;
}

if (isAdmin) {
  var data = new FormData(),
    url = '/operational/projectCertificate/list.html?ajaxRequest=true';

  data.append('pageSize', 10);
  data.append('page', 1);
  data.append('sortField', 'id');
  data.append('orderAsc', 'false');
  data.append('statuses', 'NEW');

  $.ajax(url, {
    processData: false,
    contentType: false,
    type: 'POST',
    dataType: 'json',
    data: data
  })
    .fail(function(xhr, error, text) {
      if (xhr.status == 401 || xhr.status == 200) {
        window.location.reload();
      } else {
        $('div.alert-danger').remove();
        $(
          '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
            '<strong>' +
            xhr.status +
            '.</strong> ' +
            text +
            '</div>'
        ).insertBefore('#downloadProjects-form');
      }
    })
    .always(function(data) {
      if (data.pageResult.totalCount <= 100) {
        $('[data-role="alert"]').removeClass('hidden');
      }
    });
}
